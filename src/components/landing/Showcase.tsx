/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import { Tween } from "react-gsap";

import FeaturedWork from "@/assets/sprites/featured-work.svg";

import ProjectCard from "../ProjectCard";

const Showcase = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="min-h-screen m-auto text-black showcase bg-theme-bg-white pb-[10vh]"
    >
      <div className="max-w-[1158px] m-auto doc-padding-top">
        <p className="max-w-[275px] font-medium">
          Currently, I work at SuaCode.ai as a full-stack developer. My work is
          focused on building technology to help democratize STEM education in
          Africa.
        </p>
      </div>

      <div className="py-[10vh]">
        <div className="flex w-full h-auto gap-6 overflow-hidden my-12 text-[17rem] leading-[17rem] cursor-default select-none">
          <Tween
            from={{
              x: "-25%",
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

      <div className="max-w-[1158px] m-auto doc-padding flex flex-col gap-[15vh] relative">
        <div
          className="right-0 ml-auto -mb-[8vh] font-medium text-right sm:absolute"
          style={{
            top: "clamp(32px, 7.2vh, 56px)",
            right: "1.5rem",
          }}
        >
          <h2>Selected works</h2>
          <p>2021-2023</p>
        </div>
        <ProjectCard
          title="Working.xyz"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          role="Full-stack Developer"
        />
        <ProjectCard
          title="Working.xyz"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          role="Full-stack Developer"
        />
        <ProjectCard
          title="Working.xyz"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          role="Full-stack Developer"
        />
      </div>
    </div>
  );
});

export default Showcase;
