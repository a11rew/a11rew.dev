import { EventType, Rive, RuntimeLoader } from "@rive-app/canvas";
import { gsap } from "gsap";
import React, { useRef } from "react";

import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

export type Animatable = {
  canvas: HTMLCanvasElement;
  riveInstance: Rive;
};

type Props = {
  children: React.ReactNode;
  animatables?: Record<string, Animatable>;
} & React.HTMLAttributes<HTMLDivElement>;

RuntimeLoader.setWasmUrl("/assets/deps/rive.wasm");

const AnimatedLineBlock = ({ children, animatables, ...rest }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isAnimated = useRef(false);
  const isSequencePlaying = useRef(false);

  useIsomorphicLayoutEffect(() => {
    if (ref.current && !isAnimated.current) {
      isAnimated.current = true;
      const animatableInstances: Rive[] = [];

      const playInstanceAndNext = (idx: number) => {
        if (idx === 0 && isSequencePlaying.current) return;

        if (animatableInstances.length === 0) return;

        // Play first animation and play next animation when first animation is complete
        // Use the onStop callback to play the next animation
        const instance = animatableInstances[idx];
        instance.play("root");
        isSequencePlaying.current = true;
        instance.on(EventType.Stop, () => {
          // Recursively play next animation
          if (idx < animatableInstances.length - 1) {
            playInstanceAndNext(idx + 1);
          } else {
            setTimeout(() => {
              // Space out activations
              isSequencePlaying.current = false;
            }, 3000);
          }
        });
      };

      const Splitting = require("splitting");

      const split = Splitting({
        target: ref.current,
        by: "lines",
      });

      const lines = split[0].lines.map((lineWords: Element[]) => {
        // Create line container
        const lineContainer = document.createElement("div");
        lineContainer.classList.add("overflow-hidden");

        const line = document.createElement("p");
        lineContainer.append(line);

        // Wrap each line in a container
        ref.current?.appendChild(lineContainer);

        lineWords.forEach((word) => {
          const text = word.textContent;
          if (!text) return;

          // Replace words with replacements
          if (animatables && animatables[text]) {
            const { canvas, riveInstance } = animatables[text];
            animatableInstances.push(riveInstance);

            word.replaceChildren(canvas);

            riveInstance.resizeDrawingSurfaceToCanvas();
          } else {
            word.textContent = `${word.textContent} `;
          }

          line.appendChild(word);
        });
        return line;
      });

      ref.current.style.opacity = "1";

      ref.current.onmouseenter = () => {
        playInstanceAndNext(0);
      };

      gsap.from(lines, {
        yPercent: 100,
        duration: 1.5,
        stagger: 0.1,
        ease: "power4",
        onComplete: () => {
          // Run animations in sequence
          setTimeout(() => {
            playInstanceAndNext(0);
            // Start playing animations after 1 second
          }, 1000);
        },
      });
    }
  }, [ref, animatables]);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        userSelect: "none",
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default AnimatedLineBlock;
