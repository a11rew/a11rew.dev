import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import ReactDOMServer from "react-dom/server";

import { replaceNodeWithReactComponent } from "@/utils";
// import Splitting from "splitting";

type Props = {
  children: React.ReactNode;
  replacements?: Record<string, React.ReactNode>;
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
            const replacement = replacements[text];
            replaceNodeWithReactComponent(word, replacement);
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
