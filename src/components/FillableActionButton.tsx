import React from "react";

import { cn } from "@/utils";

type Props = {
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function FillableActionButton({
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        "block w-full lg:w-auto text-center py-1 px-4 border rounded-[3rem] font-medium border-theme-text-white-muted",
        "hover:bg-theme-bg-black hover:text-theme-text-white transition-all ease-in-out duration-200",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
