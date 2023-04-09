import { useLenis } from "@studio-freight/react-lenis";
import clsx from "clsx";
import React from "react";

import ArrowUpIcon from "@/assets/sprites/up-arrow.svg";

export default function Footer() {
  const lenis = useLenis(null);
  return (
    <div className="flex justify-center min-h-[800px] bg-theme-bg-white doc-padding">
      <div className="w-full max-w-[1158px] flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <p>&copy; {new Date().getUTCFullYear()}</p>

          <div>
            <button
              className="flex items-center gap-4 group"
              onClick={() => {
                lenis.scrollTo(0, {
                  duration: 1.6,
                });
              }}
            >
              BACK TO TOP
              <div className="bg-[#3D3D3D] md:p-3 rounded-full">
                <ArrowUpIcon
                  className={clsx(
                    "transition-transform duration-200 ease-in-out",
                    "group-hover:animate-over-bounce-reverse"
                  )}
                />
              </div>
            </button>
          </div>
        </div>

        <div className="mt-16">
          <a href="mailto:andrewglago1@gmail.com" className="mail-cursor group">
            <h2 className="opacity-10 group-hover:opacity-100 ease-in-out duration-200 text-center md:text-left lg:text-[10.5rem] lg:leading-[16rem] md:text-[6.5rem] md:leading-[10rem] text-8xl font-medium uppercase mb-12">
              Reach out
            </h2>
          </a>
          <div className="flex flex-col justify-between gap-8 lg:items-end lg:flex-row">
            <div className="flex flex-wrap gap-4 mt-4 mb-8 lg:mt-0 lg:mb-0">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.github.com/a11rew"
              >
                <FooterExternalButton>Github</FooterExternalButton>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/andrew-glago-50b6b4146/"
              >
                <FooterExternalButton>Linkedin</FooterExternalButton>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.twitter.com/a11rew"
              >
                <FooterExternalButton>Twitter</FooterExternalButton>
              </a>
            </div>
            <div className="text-lg text-center md:text-left lg:text-right space-y-q text-theme-text-white-muted">
              <p className="mb-2">With ❤️ from 🇬🇭 and 🇳🇬</p>
              <a
                className="block"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/eloke-ikiliagwu/"
              >
                Designed by{" "}
                <b className="text-theme-bg-black">Eloke Ikiliagwu</b>
              </a>
              <a
                className="block"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/andrew-glago-50b6b4146/"
              >
                Developed by <b className="text-theme-bg-black">Andrew Glago</b>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type Props = {
  children: React.ReactNode;
};

function FooterExternalButton({ children }: Props) {
  return (
    <button className="w-[calc(50% -1rem)] w-full md:w-auto md:px-12 py-4 border rounded-[3rem] uppercase font-medium border-theme-text-white-muted">
      {children}
    </button>
  );
}
