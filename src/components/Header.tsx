import React from "react";
import Link from "next/link";
import Logo from "@/assets/logo.svg";

function Header() {
  return (
    <header className="flex justify-between w-full font-bold">
      <h1 className="flex items-center gap-2">
        <Logo />
        Andrew Glago
      </h1>

      <nav className="hidden sm:flex gap-14">
        {links.map(({ href, label }, idx) => (
          <Link href={href} key={href}>
            <a
              data-idx={`0${idx + 1}`}
              className={`before:text-theme-text-white-muted before:text-xs before:align-top before:mr-1 before:content-[attr(data-idx)]`}
            >
              {label}
            </a>
          </Link>
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
