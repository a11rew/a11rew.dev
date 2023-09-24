import Head from "next/head";
import Image from "next/image";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

import AnimatedLineBlock from "@/components/animatables/AnimatedLineBlock";
import FillableActionButton from "@/components/FillableActionButton";
import Header from "@/components/Header";
import { cn } from "@/utils";
import "react-photo-view/dist/react-photo-view.css";

import NoterDarkMain from "../../../public/assets/project-images/noter/dark_main.png";
import NoterDarkNote from "../../../public/assets/project-images/noter/dark_note.png";
import NoterWhiteMain from "../../../public/assets/project-images/noter/white_main.png";
import NoterWhiteNote from "../../../public/assets/project-images/noter/white_note.png";

export default function NoterProjectPage() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Noter | Andrew Glago</title>
      </Head>
      <div className="doc-padding max-w-[1158px] m-auto min-h-screen flex flex-col">
        <Header white />
        <div className="flex flex-col mt-12 md:flex-row md:mt-24">
          <div
            className={cn(
              "md:w-[62.8%] overflow-hidden relative space-y-16",
              "flex flex-row md:block gap-8",
              "overflow-scroll scrollbar-hide"
            )}
          >
            <PhotoProvider>
              <PhotoView src={NoterDarkMain.src}>
                <Image
                  className="object-cover transition-all duration-1000 hover:scale-105 min-h-[85vh]"
                  src={NoterDarkMain}
                  alt={"Image of Noter app in mobile device"}
                  placeholder="blur"
                  quality={100}
                />
              </PhotoView>
              <PhotoView src={NoterDarkNote.src}>
                <Image
                  className="object-cover transition-all duration-1000 hover:scale-105 min-h-[85vh]"
                  src={NoterDarkNote}
                  alt={"Image of Noter app in mobile device"}
                  placeholder="blur"
                  quality={100}
                />
              </PhotoView>
              <PhotoView src={NoterWhiteMain.src}>
                <Image
                  className="object-cover transition-all duration-1000 hover:scale-105 min-h-[85vh]"
                  src={NoterWhiteMain}
                  alt={"Image of Noter app in mobile device"}
                  placeholder="blur"
                  quality={100}
                />
              </PhotoView>
              <PhotoView src={NoterWhiteNote.src}>
                <Image
                  className="object-cover transition-all duration-1000 hover:scale-105 min-h-[85vh]"
                  src={NoterWhiteNote}
                  alt={"Image of Noter app in mobile device"}
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
                  Noter
                </AnimatedLineBlock>
                <p className="text-base">Role: Mobile Developer</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4 mb-8">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/a11rew/noter"
                >
                  <FillableActionButton>Code Repository</FillableActionButton>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://play.google.com/store/apps/details?id=com.andrewglago.noter"
                >
                  <FillableActionButton>Android Download</FillableActionButton>
                </a>
              </div>

              <div className="space-y-4">
                <p>
                  A mobile app for taking notes. It's a simple app that allows
                  you to create, edit, and delete notes.
                </p>

                <p>
                  Notes are persisted to the device's local storage. Edits to
                  notes are saved automatically. Notes can be searched by title
                  or content and the app supports light and dark mode theming.
                </p>

                <p>
                  Another foray into mobile development, this app was built
                  using the barebones React Native CLI and required picking up
                  native Android and iOS development and build process concepts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
