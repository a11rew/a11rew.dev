---
title: "How a Sub-Pixel Layout Feedback Loop Dropped Our React Native App to 40fps"
date: "2026-03-15T09:00:00.000Z"
ogImage:
  url: "/assets/photos/layout-feedback-loop-before.png"
draft: false
description: "A seemingly innocent onLayout callback was silently firing 245 times in 14 seconds, cascading through 57 components every 50ms, and tanking our frame rate. Here's how I found it and what it taught me about React Native's layout engine."
tags: ["react-native", "performance", "debugging"]
---

A seemingly innocent `onLayout` callback was silently firing 245 times in 14 seconds, cascading through 57 components every 50ms, and tanking our frame rate. Here's how I found it and what it taught me about React Native's layout engine.

## The symptom

I noticed our filter transactions modal felt sluggish compared to every other modal in the app. Not broken — just _off_. The animation was choppier, the UI felt heavier. Pulling up the React Native performance monitor confirmed it: frames were consistently dropping to the low 40s. Every other modal held a solid 60fps.

<video src="/assets/photos/layout-feedback-loop-before.mov" autoplay loop muted playsinline style="max-width: 300px; margin: 0 auto; display: block; border-radius: 8px;"></video>

The weird part? The modal content was simple. A few chips, a dropdown, two text inputs, and a button. Nothing that should stress a modern phone.

## First instinct: mount cost

My initial theory was that the modal was doing too much work when it opened. The filter form mounts a `CurrencyPicker` (which loads 100+ currencies from a static dataset), a `CategorySelector` (which runs a SQL query against a local SQLite database via PowerSync), and several other form controls. Plenty of work to slow down an opening animation.

But then I noticed something that killed that theory: **the frame drops continued after the modal had fully mounted and was sitting idle**. Nothing was animating. Nothing was being interacted with. The modal was just... open. And frames were still dropping.

Something was running continuously.

## Getting a profiler trace

React DevTools has a Profiler tab that can record renders and, critically, tell you _why_ each component re-rendered. The setup:

1. Connect React DevTools to the dev build (`npx react-devtools`)
2. Go to the Profiler tab
3. Enable **"Record why each component rendered while profiling"** in the profiler settings
4. Hit record, open the modal, wait a few seconds with it idle, stop recording
5. Export the profile as JSON

Viewing the app in the simulator with the profiler active will show you a border around the components that are re-rendering.
This gave me the first clue as to what was happening. Something was wrong in the BottomSheet component.

![React DevTools profiler highlighting re-rendering components around the BottomSheet — note the performance monitor showing UI: 42, JS: 40 fps](/assets/photos/layout-feedback-loop-before.png)

That JSON file is a goldmine. It contains every React commit (a batch of component renders), which components participated, how long each took, and what triggered the re-render — props change, hook change, context change, or first mount.

## Analysing the data

The profile JSON was 512KB — too dense to read manually. I spun up Claude Code, and had it write Python scripts to parse it and pull out the patterns.

The first thing that jumped out:

```
Total commits: 611
Recording duration: 13,899ms
Average interval: 23ms
```

**611 React commits in 14 seconds while the modal was completely idle.** That's ~44 commits per second. For context, at 60fps you have a 16ms budget per frame. If React is committing renders every 23ms on average, there's almost no headroom.

### Three repeating patterns

Every single commit fell into one of three patterns, each occurring exactly 245 times:

| Pattern | Trigger                                  | Avg Duration       | Total Cost |
| ------- | ---------------------------------------- | ------------------ | ---------- |
| **A**   | `BottomSheet` internal hook change       | 0.35ms             | 85ms       |
| **B**   | `PortalProvider` cascade → 57 components | 2.97ms (peak 42ms) | 728ms      |
| **C**   | Empty commits (effects only)             | ~0ms               | ~0ms       |

Pattern A always fired first, then Pattern B followed 15–32ms later. Like clockwork, every ~50ms:

```
26ms:  Pattern A
58ms:  Pattern B
108ms: Pattern A
128ms: Pattern B
159ms: Pattern A
174ms: Pattern B
...
```

### Finding the root cause

The profiler's "why did this render" data pointed directly at the source. Pattern A was triggered by hook index #23 in our `BottomSheet` wrapper component. Counting through the hooks in order:

```
hook 0:  useWindowDimensions
hook 1:  useSafeAreaInsets
hook 2-7: useRef (×6)
hook 8-9: useCallback (×2)
hook 10: useMemo
hook 11: useState (isOpen)
...
hook 23: useState (footerHeight)  ← this one
```

`useState(footerHeight)` — the state that tracked the measured height of the bottom sheet's absolutely positioned footer.

## The feedback loop

Here's the architecture that created the problem. Our bottom sheet has an absolutely positioned footer (containing action buttons like "Apply" or "Reset"). Because the footer floats over the scrollable content, we need to add equivalent `paddingBottom` to the scroll view's content container so nothing gets hidden behind it. The previous implementation measured the footer dynamically:

```tsx
const [footerHeight, setFooterHeight] = useState(0);

const handleFooterLayout = useCallback((e: LayoutChangeEvent) => {
  setFooterHeight(e.nativeEvent.layout.height);
}, []);

const contentContainerStyle = useMemo(
  () => ({ paddingBottom: footerHeight }),
  [footerHeight],
);
```

The footer View had `onLayout={handleFooterLayout}`, and the padding was derived from the measured height. Perfectly reasonable pattern. Except it created a cycle:

```
setFooterHeight(X)
  → contentContainerStyle recomputes (paddingBottom = X)
    → ScrollView gets new contentContainerStyle
      → BottomSheet dynamic sizing recalculates sheet height
        → Layout pass on all children (including the absolute footer)
          → footer onLayout fires with height Y
            → setFooterHeight(Y)
              → if Y ≠ X, the loop repeats
```

The footer's own height doesn't depend on `paddingBottom`. It's absolutely positioned — it should be the same size regardless. So why would `Y ≠ X`?

### Sub-pixel oscillation

iOS's layout engine returns sub-pixel-accurate floating point values. On successive layout passes, it can return _slightly_ different values for the same visual layout:

```
Pass 1: 64.333251953125
Pass 2: 64.333984375
Pass 3: 64.333251953125
Pass 4: 64.333984375
```

The values oscillate in the sub-pixel range — completely invisible to the user, but technically different as far as JavaScript's `===` operator is concerned. React's `useState` only bails out of a re-render when the new value is identical to the previous one. These floating point deltas, despite being visually meaningless, are enough to keep the state updating.

Every 50ms: measure → different float → state update → re-layout → measure → different float → state update → forever.

### The cascade

If this were just the `BottomSheet` component re-rendering in isolation, the cost would be negligible (Pattern A averaged 0.35ms). The real damage came from the cascade.

The bottom sheet renders its content inside a Portal (from `@gorhom/bottom-sheet`). When the bottom sheet re-renders, the `PortalProvider` at the root of the app updates, which triggers a context change in `PortalHost`, which re-renders the entire portalled subtree — 57 components including the scroll view, gesture handlers, NativeWind style recalculations (`CssInterop` components), and the full form content.

The most expensive single commit in the profile was **42.76ms** — nearly three entire frames consumed by one render of an idle modal. NativeWind's `CssInterop` wrappers alone accounted for ~32ms of self-time in that commit, recalculating styles for components whose visual output hadn't changed at all.

## The fix

### Quick validation

Before fixing anything, I confirmed the diagnosis by hardcoding the footer height:

```tsx
const footerHeight = 64; // instead of useState + onLayout
```

Frame drops stopped immediately. 60fps, zero jank.

<video src="/assets/photos/layout-feedback-loop-after.mov" autoplay loop muted playsinline style="max-width: 300px; margin: 0 auto; display: block; border-radius: 8px;"></video>

![After the fix — solid 60/60 fps with the same modal open](/assets/photos/layout-feedback-loop-after.png)

### First fix: break the oscillation

The minimal fix is to round the measured height so sub-pixel deltas don't trigger state updates:

```tsx
const handleFooterLayout = useCallback((e: LayoutChangeEvent) => {
  const height = Math.round(e.nativeEvent.layout.height);
  setFooterHeight((prev) => (prev === height ? prev : height));
}, []);
```

`Math.round` collapses `64.333` and `64.334` to the same integer. The functional updater with equality check guarantees React bails out when the rounded value hasn't changed. Loop broken.

### Better fix: remove the measurement entirely

But this raised a bigger question: do we actually need dynamic measurement? I audited every usage of our `BottomSheet` component across the app — 30 files. Every single footer was either a row of action buttons (via an `actions` prop) or a single-row custom footer. All the same height. None had content that could grow dynamically.

The dynamic measurement was a generalisation added in anticipation of variable-height footers that never materialised. So I replaced it with a constant:

```tsx
// Fixed footer height: p-4 (16px) top/bottom padding + size="lg" button (48px).
//
// This is intentionally a constant rather than dynamically measured via onLayout.
// Dynamic measurement caused a layout feedback loop: footer height → paddingBottom →
// layout recalc → onLayout → footer height, running every ~50ms and dropping frames
// to 40fps.
//
// If footer content needs to be taller than this, either:
// 1. Update this constant to match the new height, or
// 2. Reintroduce onLayout with a guard against sub-pixel oscillation:
//    setFooterHeight(prev => Math.round(height) === prev ? prev : Math.round(height))
const FOOTER_HEIGHT = 64;
```

No measurement, no state, no feedback loop, no cascade. The comment ensures the next developer who touches this understands the constraint and has a path forward if requirements change.

## The numbers

From the profiling data:

- **~490 unnecessary re-renders eliminated** per 14 seconds
- **~813ms of JS thread time recovered** per 14 seconds
- **57 components** no longer cascade re-render every 50ms
- Worst-case single commit dropped from **42.76ms** to **0ms**
- The JS thread was spending **~6% of its total time** re-rendering an idle modal

## Takeaways

**`onLayout` is safe — feedback loops through it are not.** The React Native docs recommend `onLayout` for dynamic measurement, and it works well for one-shot measurements or cases where the measured value doesn't feed back into the layout that produced it. The danger is when measured values flow into styles that affect the same layout tree. If you're using `onLayout` to measure something and then using that measurement to adjust the layout of a parent or sibling, you may have a feedback loop.

**Sub-pixel layout values are unstable across passes.** iOS's layout engine doesn't guarantee identical floating point results for the same visual layout across consecutive passes. If you're storing layout measurements in React state, round them. The sub-pixel precision is visually meaningless but computationally expensive when it prevents state bailouts.

**Profile with "why did this render" enabled.** Without this flag, the React DevTools profiler shows you _that_ components re-rendered but not _why_. The "why" is everything. It's the difference between "57 components are slow" and "one useState is triggering a cascade through 57 components."

**Question generalisations that add runtime cost.** Dynamic measurement for a footer that's always the same height is complexity with no upside and, in this case, significant downside. The best code for performance is code that doesn't run.
