import clsx from "clsx";
import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  description: string;
  image?: string;
  role: string;
  left?: boolean;
};

const ProjectCard = ({ title, description, image, role, left }: Props) => {
  return (
    <div>
      <div
        className={clsx(
          "relative flex font-medium",
          "flex-col sm:flex-row",
          left && "sm:flex-row-reverse"
        )}
      >
        <div className="h-[85vh] sm:w-[62.8%] bg-[#EBEBEB] relative shrink-0 mb-4 sm:mb-0">
          {image ? (
            <Image
              className="absolute inset-0 object-cover w-full h-full"
              src={image}
              alt={title}
            />
          ) : null}
        </div>
        <div
          className={clsx("sm:absolute bottom-[10vh]", !left && "right-[5%]")}
        >
          <h1
            className={clsx(
              "sm:text-[80px] text-4xl font-medium sm:leading-[104px] pb-8 sm:pb-4 relative w-fit ml-auto overflow-hidden",
              !left && "sm:text-right",
              "group"
            )}
          >
            {title}
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
          <div
            className={clsx(
              "sm:w-[33%]",
              left ? "mr-auto sm:pr-5" : "ml-auto sm:pl-5"
            )}
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
