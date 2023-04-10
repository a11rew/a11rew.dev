import { EventType, Rive, RuntimeLoader } from "@rive-app/canvas";
import riveWASM from "@rive-app/canvas/rive.wasm";
import { gsap } from "gsap";
import React, { useRef } from "react";

import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

type Props = {
  children: React.ReactNode;
  replacements?: Record<string, string>;
} & React.HTMLAttributes<HTMLDivElement>;

RuntimeLoader.setWasmUrl(riveWASM);

const AnimatedLineBlock = ({ children, replacements, ...rest }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isAnimated = useRef(false);

  useIsomorphicLayoutEffect(() => {
    if (ref.current && !isAnimated.current) {
      isAnimated.current = true;
      const animatableInstances: Rive[] = [];

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
          if (replacements && replacements[text]) {
            // Create canvas child
            const canvas = document.createElement("canvas");
            canvas.style.display = "inline";
            canvas.className = "h-[3.5rem] w-[4rem] md:-ml-3 -ml-1";

            // Instantiate rive
            const riveInstance = new Rive({
              src: replacements[text],
              canvas,
              onLoad: () => {
                riveInstance.resizeDrawingSurfaceToCanvas();
              },
            });

            animatableInstances.push(riveInstance);

            word.replaceChildren(canvas);
          } else {
            word.textContent = `${word.textContent} `;
          }

          line.appendChild(word);
        });
        return line;
      });

      ref.current.style.opacity = "1";

      gsap.from(lines, {
        yPercent: 100,
        duration: 1.5,
        stagger: 0.1,
        ease: "power4",
        onComplete: () => {
          // Run animations in sequence
          setTimeout(() => {
            // Play first animation and play next animation when first animation is complete
            // Use the onStop callback to play the next animation
            const playInstanceAndNext = (idx: number) => {
              const instance = animatableInstances[idx];
              instance.play();
              instance.on(EventType.Stop, () => {
                // Recursively play next animation
                if (idx < animatableInstances.length - 1) {
                  playInstanceAndNext(idx + 1);
                }
              });
            };

            playInstanceAndNext(0);
            // Start playing animations after 5 seconds
          }, 5000);
        },
      });
    }
  }, [ref, replacements]);

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
