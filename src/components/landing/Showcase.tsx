/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import { Tween } from "react-gsap";

import FeaturedWork from "@/assets/wordmarks/featured-work.svg";

import AfrigivesPromo from "../../../public/assets/project-images/afrigives/promo.png";
import NoterPromo from "../../../public/assets/project-images/noter/promo.png";
import ProjectCard from "../ProjectCard";

const Showcase = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="min-h-screen m-auto text-black showcase bg-theme-bg-white pb-[10vh]"
    >
      <div className="max-w-[1158px] m-auto doc-padding-top">
        <p className="max-w-[275px] font-medium">
          Currently, I work at pubGenius. Inc, a software development
          consultancy as a full-stack developer. I work daily on a variety of
          projects with an amazing team of developers, designers, and
          product-owners.
        </p>
      </div>

      <div className="py-[10vh]">
        <div className="flex w-full h-auto gap-6 overflow-scroll scrollbar-hide my-12 text-[17rem] leading-[17rem] cursor-default select-none">
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
          <h2>Selected work</h2>
          <p>2021-2023</p>
        </div>
        <div className="space-y-[15vh]">
          <ProjectCard
            title="Afrigives"
            description="Website and mobile app for Afrigives, a non-profit organization that facilitates donations in kind to charities and disaster-stricken areas in Africa."
            role="Frontend and Mobile Developer"
            image={AfrigivesPromo}
            link="https://afrigives.vercel.app/"
          />
          <ProjectCard
            title="Noter"
            description={
              "No frills Android and iOS application for taking notes."
            }
            role="Mobile Developer"
            image={NoterPromo}
            link="https://github.com/a11rew/noter"
          />
        </div>
      </div>
    </div>
  );
});

export default Showcase;
