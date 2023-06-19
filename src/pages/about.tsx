/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import Head from "next/head";
import Image from "next/image";
import React, { forwardRef } from "react";
import { Tween } from "react-gsap";
import { PhotoProvider, PhotoView } from "react-photo-view";

import StickerSquare from "@/assets/sprites/sticker-square.svg";
import Music from "@/assets/wordmarks/music.svg";
import OutsideWork from "@/assets/wordmarks/outside-work.svg";
import AnimatedLineBlock from "@/components/animatables/AnimatedLineBlock";
import ExternalLink from "@/components/ExternalLink";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LastPlayed from "@/components/LastPlayed";
import { defaultTopAlbums, fetchTopAlbums, TopAlbum } from "@/hooks/music";

import "react-photo-view/dist/react-photo-view.css";
import { GetStaticProps } from "next";

interface AboutPageProps {
  topAlbums: TopAlbum[];
}

export default function AboutPage({ topAlbums }: AboutPageProps) {
  return (
    <div className="min-h-screen">
      <Head>
        <title>About | Andrew Glago</title>
      </Head>
      <div className="doc-padding max-w-[1158px] m-auto min-h-screen flex flex-col">
        <Header white />

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
                I&apos;m Andrew Glago, a versatile software engineer with a
                diverse background in web, mobile and embedded systems
                development.
              </p>
            </div>
            <div className="flex items-center col-span-1 row-span-1 md:justify-end md:items-start md:col-span-2">
              <p className="max-w-xs">
                My experience spans across various industries and projects,
                ranging from AI-driven SaaS applications to mobile systems for
                agriculture.
              </p>
            </div>
            <div className="flex items-center col-span-1 row-span-1 md:block">
              <p className="max-w-xs">
                Currently based in Accra, Ghana, When not programming, I enjoy
                basketball, competitive esports, and hackathons.
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
          <div className="relative justify-between w-full h-full gap-8 md:flex">
            <div className="flex flex-col">
              <p className="sticky top-0 max-w-xs py-6 pt-0 bg-theme-bg-white">
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
              <p className="sticky top-0 max-w-xs pt-6 bg-theme-bg-white">
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
              <p className="sticky top-0 max-w-xs pt-12 bg-theme-bg-white">
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
                "md:absolute md:-right-[15%] -mx-[10%] md:mx-0 overflow-scroll scrollbar-hide"
              )}
            >
              <PhotoProvider>
                <Tween
                  from={{
                    x: "40%",
                  }}
                  to={{
                    x: "-5%",
                    ease: "none",
                    scrollTrigger: {
                      start: "top bottom",
                      trigger: ".about",
                      scrub: true,
                    },
                  }}
                >
                  <AboutSlideCard
                    image="/assets/photos/esports.jpeg"
                    alt="Andrew posing for an esports competition promo photo."
                    description="Posing for an esports tournament promo photo."
                  />
                  <AboutSlideCard
                    image="/assets/photos/bicycle.jpeg"
                    alt="Andrew's bicycle, the Raleigh MXR DS-29er."
                    description="First love, the Raleigh MXR DS-29er."
                  />
                  <AboutSlideCard
                    image="/assets/photos/basketball.png"
                    alt="Andrew handling a basketball. Cause clean handles, obviously."
                    description="Clean handles, obviously."
                  />
                </Tween>
              </PhotoProvider>
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
              scrub: true,
            },
          }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="mr-10 shrink-0">
              <Music />
            </div>
          ))}
        </Tween>
      </div>

      <div className="overflow-x-hidden scrollbar-hide min-h-[805px] music mt-12">
        <div className="m-auto doc-padding max-w-[1158px] relative">
          <div className="relative w-full gap-8 md:justify-end md:flex">
            <div className="flex flex-col">
              <p className="sticky top-0 max-w-xs py-6 pt-0 bg-theme-bg-white">
                In case you missed it, the writing isn&apos;t on the wall,{" "}
                <ExternalLink href="https://youtu.be/yIzakOOxRXI?t=241">
                  IT&apos;S COMING OUT YOUR SPEAKERS
                </ExternalLink>
                .
              </p>
              <p className="sticky top-0 max-w-xs pt-6 bg-theme-bg-white">
                Alright, alright, sorry for the yelling, I&apos;m a huge music
                buff. A sucker for rap particularly. I transcribe and annotate
                lyrics to songs on Genius.{" "}
                <ExternalLink href="https://genius.com/AndrewHGA">
                  Check out my editor profile there.
                </ExternalLink>
              </p>
              {topAlbums.length > 0 && (
                <p className="sticky top-0 max-w-xs pt-12 bg-theme-bg-white gb">
                  Here are three of the albums I&apos;ve been listening to the
                  most lately. Let me know if you have any recommendations!
                </p>
              )}
            </div>

            <PhotoProvider>
              <div
                className={clsx(
                  "flex flex-row-reverse md:flex-wrap mt-16 md:mt-0 m-auto md:max-w-[80%] md:justify-end gap-8 pl-[25%] lg:pl-[7%]",
                  "md:absolute md:left-[-15%] -mx-[10%] md:mx-0 overflow-scroll scrollbar-hide"
                )}
              >
                <Tween
                  from={{
                    x: "-40%",
                  }}
                  to={{
                    x: "5%",
                    ease: "none",
                    scrollTrigger: {
                      trigger: ".music",
                      start: "top bottom",
                      scrub: true,
                    },
                  }}
                >
                  {Array.from({ length: 3 }).map((_, i) => {
                    const album = topAlbums[i]; // This kills me inside but GSAP isn't playing nicely with dynamic children

                    return <MusicSlideCard album={album} key={album.name} />;
                  })}
                </Tween>
              </div>
            </PhotoProvider>
          </div>
        </div>
      </div>

      <Footer page />
    </div>
  );
}

const AboutSlideCard = forwardRef<
  HTMLDivElement,
  {
    image: string;
    description: string;
    alt: string;
  }
>(({ image, description, alt }, ref) => (
  <div
    ref={ref}
    className="w-[325px] h-[325px] bg-gray-300 shrink-0 relative group overflow-hidden"
  >
    <PhotoView src={image}>
      <div>
        <Image
          src={image}
          fill
          className="object-cover transition-all duration-1000 group-hover:scale-105"
          alt={alt}
          quality={100}
        />
        <div
          className={clsx(
            "absolute bottom-0 z-10 flex flex-col justify-end w-full p-4 h-3/5 ",
            "bg-gradient-to-t from-theme-bg-white invert break-words text-ellipsis",
            "transition-all opacity-0 group-hover:opacity-100 duration-1000"
          )}
        >
          <p>{description}</p>
        </div>
      </div>
    </PhotoView>
  </div>
));

AboutSlideCard.displayName = "AboutSlideCard";

const MusicSlideCard = forwardRef<HTMLDivElement, { album: TopAlbum }>(
  ({ album }, ref) => (
    <div ref={ref}>
      <PhotoView src={album.image}>
        <div
          className={clsx(
            "group w-[325px] h-[325px] bg-gray-300 shrink-0 relative",
            "overflow-hidden"
          )}
        >
          <img
            src={album.image}
            className="object-cover w-full transition-all duration-1000 group-hover:scale-105"
            alt={`Album cover image for ${album.name} by ${album.artist}`}
          />

          <div
            className={clsx(
              "absolute bottom-0 z-10 flex flex-col justify-end w-full p-4 h-3/5 ",
              "bg-gradient-to-t from-theme-bg-white invert break-words text-ellipsis",
              "transition-all opacity-0 group-hover:opacity-100 duration-1000"
            )}
          >
            <b>{album.name}</b>
            <p>{album.artist}</p>
          </div>
        </div>
      </PhotoView>
    </div>
  )
);

MusicSlideCard.displayName = "MusicSlideCard";

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
  let topAlbums: TopAlbum[] = defaultTopAlbums;

  try {
    topAlbums = await fetchTopAlbums();
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      topAlbums,
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};
