import clsx from "clsx";
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
        <div className="h-[85vh] sm:w-[72.8%] bg-[#EBEBEB] relative shrink-0 mb-4 sm:mb-0">
          {image ? (
            <img
              className="absolute inset-0 object-cover w-full h-full"
              src={image}
              alt={title}
            />
          ) : null}
        </div>
        <div className={clsx("sm:absolute bottom-0", !left && "right-0")}>
          <h1
            className={clsx(
              "sm:text-[80px] text-4xl font-medium sm:leading-[104px] pb-8 sm:pb-4",
              !left && "sm:text-right"
            )}
          >
            {title}
          </h1>
          <div
            className={clsx(
              "sm:w-[27.2%]",
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
