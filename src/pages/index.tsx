import riveWASMUrl from "@rive-app/canvas/rive.wasm";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useLenis } from "@studio-freight/react-lenis";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useRef } from "react";

import ArrowDownIcon from "@/assets/sprites/down-arrow.svg";
import AnimatedLineBlock from "@/components/animatables/AnimatedLineBlock";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OtherProjects from "@/components/landing/OtherProjects";
import Showcase from "@/components/landing/Showcase";
import SEO from "@/components/SEO";
import {
  TransitionContextProvider,
  useTransitionContext,
} from "@/components/transitions";
import HomeIntro from "@/components/transitions/HomeIntro";

export default function Home() {
  return (
    <div className="min-h-screen bg-theme-bg-black">
      <SEO />

      <TransitionContextProvider>
        <LandingPageWithAnimatedIntro />
      </TransitionContextProvider>
    </div>
  );
}

function LandingPageWithAnimatedIntro() {
  const {
    values: { isTransitionComplete },
  } = useTransitionContext();

  // Show intro until transition is complete
  return (
    <AnimatePresence mode="wait">
      {!isTransitionComplete ? (
        <ReactLenis root>
          <LandingPage key={2} />
        </ReactLenis>
      ) : (
        <HomeIntro key={1} />
      )}
    </AnimatePresence>
  );
}

function LandingPage() {
  const lenis = useLenis(null);
  const ref = useRef<HTMLDivElement>(null);

  const scrollShowcaseIntoView = () => {
    lenis.scrollTo(ref.current, {
      duration: 1.6,
    });
  };

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/assets/globe.riv"
          as="fetch"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/rocket.riv"
          as="fetch"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/wave.riv"
          as="fetch"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="min-h-screen">
        <div className="doc-padding text-theme-text-white bg-theme-bg-black max-w-[1158px] m-auto h-screen min-h-[600px] flex flex-col justify-between">
          <Header entryAnimation />
          <AnimatedLineBlock
            className="text-[2.25rem] leading-[3.25rem] md:text-[3.5rem] md:leading-[4.45rem] font-bold cursor-default"
            replacements={{
              "*:g": "/assets/globe.riv",
              "*:r": "/assets/rocket.riv",
              "*:w": "/assets/wave.riv",
            }}
          >
            Software developer *:w
            <span className="text-theme-text-white-muted">
              passionate about
            </span>
            building performant *:r applications for the web *:g
            <span className="text-theme-text-white-muted">and beyond</span>
          </AnimatedLineBlock>
          <div className="text-theme-text-white-muted">
            <button
              onClick={scrollShowcaseIntoView}
              className="flex items-center gap-2"
            >
              <span>SCROLL TO DISCOVER</span>
              <span className="mb-1 overflow-y-clip">
                <ArrowDownIcon className="w-5 h-5 animate-over-bounce" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <Showcase ref={ref} />
        </div>
        <div>
          <OtherProjects />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
