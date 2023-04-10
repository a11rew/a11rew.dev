import React from "react";

import ArrowUpRightIcon from "@/assets/sprites/up-right-arow.svg";

const OtherProjects = () => {
  return (
    <div className="text-theme-bg-white doc-padding max-w-[1158px] m-auto min-h-screen">
      <h1 className="sm:text-[80px] text-4xl font-medium sm:leading-[104px] text-center mt-8 sm:mt-24 mb-20">
        OTHER PROJECTS
      </h1>
      <div className="flex flex-wrap justify-between">
        <OtherProjectCard
          name="Lenis"
          tech="React, Framer Motion, TypeScript"
          description="A simple and minimalistic Pomodoro timer."
        />
        <OtherProjectCard
          name="Lenis"
          tech="React, Framer Motion, TypeScript"
          description="A simple and minimalistic Pomodoro timer."
        />
        <OtherProjectCard
          name="Lenis"
          tech="React, Framer Motion, TypeScript"
          description="A simple and minimalistic Pomodoro timer."
        />
        <OtherProjectCard
          name="Lenis"
          tech="React, Framer Motion, TypeScript"
          description="A simple and minimalistic Pomodoro timer."
        />
      </div>
    </div>
  );
};

export default OtherProjects;

type Props = {
  name: string;
  tech: string;
  description: string;
};

const OtherProjectCard = ({ name, tech, description }: Props) => {
  return (
    <div className="bg-[#292929] w-full sm:w-[49%] mb-4 sm:mb-[2vw] p-6 sm:p-11">
      <div className="flex flex-col">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-medium text-theme-text-white-muted">{tech}</p>
          </div>
          <button className="bg-[#3D3D3D] p-4 rounded-full group">
            <p className="sr-only">Visit {name} on GitHub</p>
            <ArrowUpRightIcon className="transition-transform duration-200 ease-in-out group-hover:rotate-45" />
          </button>
        </div>
        <hr className="my-8 border-[#3D3D3D]" />
        <div>
          <p className="font-medium">{description}</p>
        </div>
      </div>
    </div>
  );
};
