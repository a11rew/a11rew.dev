import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { Tween } from "react-gsap";

import StickerSquare from "@/assets/sprites/sticker-square.svg";
import OutsideWork from "@/assets/wordmarks/outside-work.svg";
import AnimatedLineBlock from "@/components/animatables/AnimatedLineBlock";
import ExternalLink from "@/components/ExternalLink";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LastPlayed from "@/components/LastPlayed";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-theme-bg-white">
      <div className="doc-padding max-w-[1158px] m-auto min-h-screen flex flex-col">
        <Header white entryAnimation />

        <div className="mt-[8vh] md:mt-[22.9vh] text-[2.25rem] leading-[3.25rem] md:text-[3.5rem] md:leading-[4.45rem] font-medium cursor-default">
          <AnimatedLineBlock className="mb-2">Andrew Glago</AnimatedLineBlock>
          <AnimatedLineBlock>Software Developer</AnimatedLineBlock>
        </div>

        <div className="xl:w-[70vw] relative sm:mt-[10vh] max-w-full">
          <div className="grid grid-cols-1 grid-rows-3 sm:grid-cols-2 md:grid-cols-3 gap-y-8 md:gap-y-20 gap-x-12 xl:gap-x-32">
            <div className="flex items-center row-span-1 -mb-8 sm:-mb-0 md:items-start xl:justify-center md:col-span-2">
              <ExternalLink
                href="https://drive.google.com/file/d/1Nbqi9v2-VbJwp3-JHolsX_bm1hBNWibZ/view"
                className="flex items-center h-fit"
              >
                <StickerSquare className="inline mr-1" />
                View Resume
              </ExternalLink>
            </div>
            <div className="flex items-center col-span-1 row-span-1 md:block">
              <p className="max-w-xs mt-auto">
                Nisl rhoncus aliquet enim, in quis senectus. Integer elit
                tincidunt aliquam ac sed malesuada arcu quam. Sed consequat
                facilisis consequat mattis eu neque libero quam dictum.
              </p>
            </div>
            <div className="flex items-center col-span-1 row-span-1 md:justify-end md:items-start md:col-span-2">
              <p className="max-w-xs">
                Tincidunt egestas amet, habitant ut pharetra duis dolor odio.
                Morbi mi lorem quam morbi et mattis aliquam arcu. Neque volutpat
                purus aliquam congue ipsum pretium,
              </p>
            </div>
            <div className="flex items-center col-span-1 row-span-1 md:block">
              <p className="max-w-xs">
                Tincidunt egestas amet, habitant ut pharetra duis dolor odio.
                Morbi mi lorem quam morbi et mattis aliquam arcu. Neque volutpat
                purus aliquam congue ipsum pretium,
              </p>
            </div>
            <div className="flex items-center col-span-1 row-span-1 pt-8 md:pt-0 md:block">
              <LastPlayed />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full h-auto gap-6 overflow-scroll scrollbar-hide md:my-12 md:mb-28 text-[17rem] leading-[17rem] cursor-default select-none">
        <Tween
          from={{
            x: "-25%",
          }}
          to={{
            x: "-100%",
            ease: "none",
            scrollTrigger: {
              end: "bottom center",
              scrub: true,
            },
          }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="mr-10 shrink-0">
              <OutsideWork />
            </div>
          ))}
        </Tween>
      </div>

      <div className="overflow-x-hidden scrollbar-hide min-h-[805px] about mt-12">
        <div className="m-auto doc-padding max-w-[1158px] relative">
          <div className="relative justify-between w-full gap-8 md:flex">
            <div className="sticky top-0 flex flex-col gap-12">
              <p className="max-w-xs">
                Outside work, I am an avid gamer, currently having the most fun
                with the Tomb Raider trilogy. Catch me on{" "}
                <ExternalLink href="https://www.instagram.com/fps_andrew/">
                  Instagram
                </ExternalLink>{" "}
                and{" "}
                <ExternalLink href="https://www.youtube.com/channel/UCYMi1weuwpJZUNPfCFFD0yQ">
                  YouTube
                </ExternalLink>{" "}
                making a montage of your favorite PUBGM player.
              </p>
              <p className="max-w-xs">
                When I am not behind my desk trying to figure out why on earth
                they were called{" "}
                <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/API/atob">
                  atob
                </ExternalLink>{" "}
                and{" "}
                <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/API/btoa">
                  btoa
                </ExternalLink>
                , I enjoy cycling down my city streets under the neon lit cold
                nights.
              </p>
              <p className="max-w-xs">
                I&apos;m a big basketball fan as well, you could find me{" "}
                <ExternalLink href="https://youtu.be/QT8w8Ot8Pcw?t=72">
                  Shaq posting up
                </ExternalLink>{" "}
                on the court any given Friday.
              </p>
            </div>

            <div
              className={clsx(
                "flex md:flex-wrap mt-16 md:mt-0 m-auto md:max-w-[80%] md:justify-end gap-8 pr-[25%] lg:pr-[7%]",
                "md:absolute md:right-[-15%]  overflow-scroll scrollbar-hide"
              )}
            >
              <Tween
                from={{
                  x: "40%",
                }}
                to={{
                  x: "-5%",
                  ease: "none",
                  scrollTrigger: {
                    trigger: ".about",
                    start: "top center",
                    end: "bottom top",
                    scrub: true,
                  },
                }}
              >
                <div className="w-[325px] h-[325px] bg-gray-300 shrink-0 relative">
                  <Image
                    src="/assets/photos/basketball.png"
                    fill
                    objectFit="cover"
                    alt="Andrew handling a basketball. Cause clean handles, obviously."
                  />
                </div>
                <div className="w-[325px] h-[325px] bg-gray-300 shrink-0 relative">
                  <Image
                    src="/assets/photos/bicycle.jpeg"
                    fill
                    objectFit="cover"
                    alt="Andrew's bicycle"
                  />
                </div>
                <div className="w-[325px] h-[325px] bg-gray-300 shrink-0 relative">
                  <Image
                    src="/assets/photos/esports.png"
                    fill
                    objectFit="cover"
                    alt="Andrew posing for an esports competition promo photo"
                  />
                </div>
              </Tween>
            </div>
          </div>
        </div>
      </div>

      <Footer page />
    </div>
  );
}
