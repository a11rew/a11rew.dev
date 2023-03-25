import { useLenis } from "@studio-freight/react-lenis";
import { AnimatePresence } from "framer-motion";
import { useRef } from "react";

import { sprites } from "@/assets/sprites";
import ArrowDownIcon from "@/assets/sprites/down-arrow.svg";
import AnimatedLineBlock from "@/components/animatables/AnimatedLineBlock";
import Header from "@/components/Header";
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
      {isTransitionComplete ? <LandingPage key={2} /> : <HomeIntro key={1} />}
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
    <div className="min-h-screen">
      <div className="doc-padding text-theme-text-white bg-theme-bg-black max-w-[1158px] m-auto h-screen min-h-[600px] flex flex-col justify-between">
        <Header entryAnimation />
        <AnimatedLineBlock
          className="text-[2.25rem] leading-[3.25rem] md:text-[3.5rem] md:leading-[4.45rem] font-bold cursor-default"
          replacements={{
            "*:g": sprites.globe,
            "*:r": sprites.rocket,
            "*:w": sprites.wave,
          }}
        >
          <span className="text-theme-text-white-muted">I am a</span>
          software developer *:w
          <span className="text-theme-text-white-muted">passionate about</span>
          building *:r performant applications for the web
          <span className="text-theme-text-white-muted">and beyond</span>
          *:g
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
      <div className="bg-theme-bg-white">
        <Showcase ref={ref} />
      </div>
    </div>
  );
}
