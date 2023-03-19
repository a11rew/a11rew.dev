import clsx from "clsx";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  label: string;
  index: number;
};

const AnimatedLink = ({ href, label, index }: Props) => {
  return (
    <Link
      href={href}
      data-idx={`0${index + 1}`}
      className={clsx(
        "relative inline-block group",
        "before:text-theme-text-white-muted before:text-xs before:align-top before:mr-1 before:content-[attr(data-idx)] before:absolute before:-left-[22px]",
        "flex flex-col gap-[8px] h-[24px] overflow-y-clip"
      )}
    >
      {[...Array(2)].map((_, idx) => (
        <span
          key={2}
          className="group-hover:-translate-y-[32.5px] transition-all duration-[600ms]"
        >
          {label}
        </span>
      ))}
    </Link>
  );
};

export default AnimatedLink;
