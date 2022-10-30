import React from "react";
import Link from "next/link";
import Logo from "@/assets/logo.svg";
import AnimatedLink from "./animatables/AnimatedLink";

function Header() {
  return (
    <header className="flex justify-between w-full font-bold">
      <h1 className="flex items-center gap-2">
        <Logo />
        Andrew Glago
      </h1>

      <nav className="hidden sm:flex gap-14">
        {links.map(({ href, label }, idx) => (
          <AnimatedLink key={href} href={href} label={label} index={idx} />
        ))}
      </nav>
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
