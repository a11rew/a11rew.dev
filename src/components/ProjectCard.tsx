import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  title: string;
  description: string;
  image: StaticImageData;
  role: string;
  link?: string;
};

const ProjectCard = ({ title, description, image, role, link }: Props) => {
  return (
    <div className={clsx("sm:flex")}>
      <div className="sm:w-[62.8%] overflow-hidden relative">
        <a href={link} target="_blank" rel="noreferrer">
          <Image
            className="object-cover transition-all duration-1000 hover:scale-105 min-h-[85vh]"
            src={image}
            alt={title}
            placeholder="blur"
            quality={100}
          />
        </a>
      </div>

      <div className={clsx("mt-8 sm:mt-auto sm:mb-16 sm:w-[33%] sm:pl-4")}>
        <h1
          className={clsx(
            "sm:text-[80px] text-4xl font-medium sm:leading-[104px] pb-4 relative w-fit overflow-hidden",
            "group sm:transform sm:translate-x-[-110px] filter invert mix-blend-difference"
          )}
        >
          <a href={link} target="_blank" rel="noreferrer">
            {title}
          </a>
          <span
            className={clsx(
              "absolute bottom-[10px] left-0 w-full transition-all ease-in-out h-[6px] bg-black",
              "-translate-x-full group-hover:translate-x-0 duration-[1.2s]"
            )}
          />
          <span
            className={clsx(
              "absolute bottom-[10px] left-0 w-full transition-all ease-in-out h-[6px] bg-black",
              "translate-x-full group-hover:translate-x-0 duration-[1.2s]"
            )}
          />
        </h1>
        <div>
          <p className="mb-3 font-medium text-theme-text-white-muted">{role}</p>
          <p className="break-words whitespace-pre-wrap">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
