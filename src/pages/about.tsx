import React from "react";

import StickerSquare from "@/assets/sprites/sticker-square.svg";
import AnimatedLineBlock from "@/components/animatables/AnimatedLineBlock";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

type Props = {};

export default function AboutPage({}: Props) {
  return (
    <div className="min-h-screen bg-theme-bg-white">
      <div className="doc-padding max-w-[1158px] m-auto min-h-screen flex flex-col">
        <Header white entryAnimation />

        <div className="mt-[22.9vh] text-[2.25rem] leading-[3.25rem] md:text-[3.5rem] md:leading-[4.45rem] font-medium cursor-default">
          <AnimatedLineBlock className="mb-2">Andrew Glago</AnimatedLineBlock>
          <AnimatedLineBlock>Software Developer</AnimatedLineBlock>
        </div>

        <div className="xl:w-[70vw] relative mt-[10vh] max-w-full">
          <div className="grid grid-cols-3 grid-rows-3 gap-y-20 gap-x-32">
            <div className="flex justify-end col-span-1 row-span-1">
              <p className="flex items-center h-fit">
                <StickerSquare className="inline mr-1" />
                View resume
              </p>
            </div>
            <div className="col-span-1 row-span-1"></div>
            <div className="col-span-1 row-span-1">
              <p className="max-w-xs mt-auto">
                Nisl rhoncus aliquet enim, in quis senectus. Integer elit
                tincidunt aliquam ac sed malesuada arcu quam. Sed consequat
                facilisis consequat mattis eu neque libero quam dictum.
              </p>
            </div>
            <div className="col-span-1 row-span-1"></div>
            <div className="col-span-1 row-span-1">
              <p className="max-w-xs">
                Tincidunt egestas amet, habitant ut pharetra duis dolor odio.
                Morbi mi lorem quam morbi et mattis aliquam arcu. Neque volutpat
                purus aliquam congue ipsum pretium,
              </p>
            </div>
            <div className="col-span-1 row-span-1">
              <p className="max-w-xs">
                Tincidunt egestas amet, habitant ut pharetra duis dolor odio.
                Morbi mi lorem quam morbi et mattis aliquam arcu. Neque volutpat
                purus aliquam congue ipsum pretium,
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer page />
    </div>
  );
}
