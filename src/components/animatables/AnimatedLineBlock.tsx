import { Rive } from "@rive-app/canvas";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  replacements?: Record<string, string>;
} & React.HTMLAttributes<HTMLDivElement>;

const AnimatedLineBlock = ({ children, replacements, ...rest }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isAnimated = useRef(false);

  useEffect(() => {
    if (ref.current && !isAnimated.current) {
      isAnimated.current = true;
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
            if (text === "*:r") {
              // Create canvas child
              const canvas = document.createElement("canvas");
              canvas.style.display = "inline";
              canvas.className = "h-[3.5rem] w-[4rem] -ml-2";

              // Instantiate rive
              const riveInstance = new Rive({
                src: replacements[text],
                canvas,
                useOffscreenRenderer: true,
                onLoad: () => {
                  riveInstance.resizeDrawingSurfaceToCanvas();
                  setTimeout(() => {
                    riveInstance.play();
                  }, 5000);
                },
              });

              word.replaceChildren(canvas);
            } else {
              const replacement = replacements[text];
              word.innerHTML = replacement;
            }
          } else {
            word.textContent = `${word.textContent} `;
          }

          line.appendChild(word);
        });
        return line;
      });

      ref.current.style.opacity = "1";
      ref.current.style.userSelect = "none";

      gsap.from(lines, {
        yPercent: 100,
        duration: 1.5,
        stagger: 0.1,
        ease: "power4",
      });
    }
  }, [ref, replacements]);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default AnimatedLineBlock;
