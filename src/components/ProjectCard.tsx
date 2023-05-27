import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  title: string;
  description: string;
  image?: StaticImageData;
  role: string;
  left?: boolean;
  link?: string;
};

const ProjectCard = ({
  title,
  description,
  image,
  role,
  left,
  link,
}: Props) => {
  return (
    <div>
      <div
        className={clsx(
          "relative flex font-medium",
          "flex-col sm:flex-row",
          left && "sm:flex-row-reverse"
        )}
      >
        <a
          href={link ?? "#"}
          target="_blank"
          rel="noreferrer"
          className="w-full"
        >
          <div className="h-[85vh] sm:w-[62.8%] relative shrink-0 mb-4 sm:mb-0 overflow-hidden bg-[#EBEBEB]">
            {image ? (
              <Image
                className="inset-0 object-cover w-full h-full transition-all duration-1000 hover:scale-105"
                src={image}
                alt={title}
                placeholder="blur"
                quality={100}
              />
            ) : null}
          </div>
        </a>
        <div
          className={clsx("sm:absolute bottom-[10vh]", !left && "right-[5%]")}
        >
          <div>
            <h1
              className={clsx(
                "sm:text-[80px] text-4xl font-medium sm:leading-[104px] pb-8 sm:pb-4 relative w-fit overflow-hidden",
                "group sm:ml-auto sm:mr-[10%]",
                !left && "sm:text-right"
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
          </div>
          <div
            className={clsx("sm:w-[33%]", left ? "mr-auto sm:pr-5" : "ml-auto")}
          >
            <p className="mb-3 text-theme-text-white-muted">{role}</p>
            <p className="break-words">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
