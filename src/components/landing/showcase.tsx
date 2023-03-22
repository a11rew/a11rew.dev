/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import { Tween } from "react-gsap";

import FeaturedWork from "@/assets/sprites/featured-work.svg";

const Showcase = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="h-screen m-auto text-black showcase">
      <div className="max-w-[1158px] m-auto doc-padding-top">
        <p className="max-w-[275px] font-medium">
          Currently, I work at SuaCode.ai as a full-stack developer. My work is
          focused on building technology to help democratize STEM education in
          Africa.
        </p>
      </div>

      <div>
        <div className="flex w-full h-auto gap-6 overflow-hidden mt-12 text-[17rem] leading-[17rem] cursor-default select-none">
          <Tween
            from={{
              x: "-25%",
              ease: "none",
            }}
            to={{
              x: "-100%",
              ease: "none",
              scrollTrigger: {
                end: "bottom center",
                scrub: true,
              },
            }}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="mr-10 shrink-0">
                <FeaturedWork />
              </div>
            ))}
          </Tween>
        </div>
      </div>

      <div className=" max-w-[1158px] m-auto doc-padding"></div>
    </div>
  );
});

export default Showcase;
