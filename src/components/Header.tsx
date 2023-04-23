import Link from "next/link";
import React from "react";
import { Tween } from "react-gsap";

import Logo from "@/assets/logo.svg";
import LogoDark from "@/assets/logo-dark.svg";

import AnimatedLink from "./animatables/AnimatedLink";
import MobileMenu from "./MobileMenu";

type Props = {
  entryAnimation?: boolean;
  white?: boolean;
};

function Header({ entryAnimation = false, white }: Props) {
  return (
    <header className="flex justify-between w-full font-bold">
      <div className="overflow-hidden">
        <Tween
          {...(entryAnimation && {
            from: { yPercent: 100 },
            to: { yPercent: 0, duration: 1.5, ease: "power4" },
          })}
        >
          <Link href="/?e=1" as="/" className="block">
            <h1 className="flex items-center gap-2">
              {white ? <LogoDark /> : <Logo />}
              Andrew Glago
            </h1>
          </Link>
        </Tween>
      </div>

      <div className="hidden overflow-hidden sm:block">
        <Tween
          {...(entryAnimation && {
            from: { yPercent: 100 },
            to: { yPercent: 0, duration: 1.5, ease: "power4" },
          })}
        >
          <nav className="flex pl-6 gap-14">
            {navLinks.map(({ href, label, as }, idx) => (
              <AnimatedLink
                key={href}
                href={href}
                label={label}
                index={idx}
                as={as}
              />
            ))}
          </nav>
        </Tween>
      </div>

      <div className="sm:hidden ">
        <MobileMenu entryAnimation={entryAnimation} />
      </div>
    </header>
  );
}

export const navLinks = [
  {
    href: "/?e=1",
    as: "/",
    label: "Home",
  },
  {
    href: "/about",
    as: "/about",
    label: "About",
  },
  {
    href: "/posts",
    as: "/posts",
    label: "Posts",
  },
];

export default Header;
