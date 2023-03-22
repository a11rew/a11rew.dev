import React from "react";
import { Tween } from "react-gsap";

import Logo from "@/assets/logo.svg";

import AnimatedLink from "./animatables/AnimatedLink";

type Props = {
  entryAnimation?: boolean;
};

function Header({ entryAnimation = false }: Props) {
  return (
    <header className="flex justify-between w-full font-bold">
      <div className="overflow-hidden">
        <Tween
          {...(entryAnimation && {
            from: { yPercent: 100 },
            to: { yPercent: 0, duration: 1.5, ease: "power4" },
          })}
        >
          <h1 className="flex items-center gap-2 cursor-default">
            <Logo />
            Andrew Glago
          </h1>
        </Tween>
      </div>

      <div className="overflow-hidden">
        <Tween
          {...(entryAnimation && {
            from: { yPercent: 100 },
            to: { yPercent: 0, duration: 1.5, ease: "power4" },
          })}
        >
          <nav className="hidden pl-6 sm:flex gap-14">
            {links.map(({ href, label }, idx) => (
              <AnimatedLink key={href} href={href} label={label} index={idx} />
            ))}
          </nav>
        </Tween>
      </div>
    </header>
  );
}

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export default Header;
