import Head from "next/head";
import Image from "next/image";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

import AnimatedLineBlock from "@/components/animatables/AnimatedLineBlock";
import ExternalLink from "@/components/ExternalLink";
import FillableActionButton from "@/components/FillableActionButton";
import Header from "@/components/Header";
import { cn } from "@/utils";

import BrochurePromo from "../../../public/assets/project-images/afrigives/brochure.png";
import AfrigivesPromo from "../../../public/assets/project-images/afrigives/promo.png";
import "react-photo-view/dist/react-photo-view.css";

export default function AfrigivesProjectPage() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Afrigives | Andrew Glago</title>
      </Head>
      <div className="doc-padding max-w-[1158px] m-auto min-h-screen flex flex-col">
        <Header white />
        <div className="flex flex-col mt-12 md:flex-row md:mt-24">
          <div
            className={cn(
              "md:w-[62.8%] overflow-hidden relative space-x-2 md:space-y-16",
              "flex flex-row md:block gap-8",
              "overflow-scroll scrollbar-hide"
            )}
          >
            <PhotoProvider>
              <PhotoView src={AfrigivesPromo.src}>
                <Image
                  className="object-cover transition-all duration-1000 hover:scale-105 h-[70vh] md:min-h-[85vh] w-[85%] md:w-full"
                  src={AfrigivesPromo}
                  alt={"Image of Afrigives app in mobile device"}
                  placeholder="blur"
                  quality={100}
                />
              </PhotoView>
              <PhotoView src={BrochurePromo.src}>
                <Image
                  className="object-cover transition-all duration-1000 hover:scale-105 h-[70vh] md:min-h-[85vh] w-[85%] md:w-full"
                  src={BrochurePromo}
                  alt={"Image of Afrigives app in mobile device"}
                  placeholder="blur"
                  quality={100}
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="md:w-[37.2%] md:pl-8 mt-8 md:mt-0">
            <div className="sticky top-16">
              <div className="text-left">
                <AnimatedLineBlock className="text-[2.25rem] leading-[3.25rem] md:text-[3.5rem] md:leading-[4.45rem] font-medium cursor-default">
                  Afrigives
                </AnimatedLineBlock>
                <p className="text-base">Role: Frontend and Mobile Developer</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4 mb-8">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://afrigives.a11rew.dev"
                >
                  <FillableActionButton>Website</FillableActionButton>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://play.google.com/store/apps/details?id=com.andrewglago.afrigives"
                >
                  <FillableActionButton>Android Download</FillableActionButton>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/a11rew/afrigives"
                >
                  <FillableActionButton>Code Repository</FillableActionButton>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://bootcamp.uxdesign.cc/ui-ux-case-study-online-clothe-donation-5fde02f49b4"
                >
                  <FillableActionButton>Design Case Study</FillableActionButton>
                </a>
              </div>

              <div className="space-y-4">
                <p>
                  Afrigives is a mobile app for a proof-of-concept charity
                  seeking to facilitate donations to the less fortunate and
                  disaster stricken in Africa.
                </p>
                <p>
                  My work on the project involved building the mobile app and
                  brochure website for the platform.
                </p>
                <p>
                  Excited about the iteration speed{" "}
                  <ExternalLink href="https://expo.dev/">Expo</ExternalLink>{" "}
                  enabled me to achieve on a previous project, it was an easy
                  choice to pick it over native Android and iOS development for
                  this project.
                </p>
                <p>
                  With the mobile app built with React Native and Expo, I
                  proceeded to build the brochure website with React, Next.js
                  and Tailwind CSS. All codebases were written in TypeScript and
                  are available on my GitHub.
                </p>
                <p>
                  Primarily intended as a learning experience, I picked up
                  essential knowledge in React, React Native and the mobile app
                  development ecosystem as a whole.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
