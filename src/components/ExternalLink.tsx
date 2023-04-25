import clsx from "clsx";
import React from "react";

type Props = {
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ExternalLink({ children, className, ...rest }: Props) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "underline underline-offset-4 hover:no-underline",
        className
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
