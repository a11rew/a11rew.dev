import { ReactLenis } from "@studio-freight/react-lenis";
import { useLenis } from "@studio-freight/react-lenis";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRef } from "react";
import { Tween } from "react-gsap";

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
import useUpdateRootVariables from "@/hooks/useUpdateRootVariables";

export default function Home() {
  const router = useRouter();
  const { e } = router.query;

  return (
    <div className="min-h-screen bg-theme-bg-black">
      <SEO />

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

      <TransitionContextProvider>
        <LandingPageWithAnimatedIntro skipAnimation={!!e} />
      </TransitionContextProvider>
    </div>
  );
}

function LandingPageWithAnimatedIntro({
  skipAnimation,
}: {
  skipAnimation?: boolean;
}) {
  const {
    values: { isTransitionComplete },
  } = useTransitionContext();

  // Show intro until transition is complete
  return (
    <AnimatePresence mode="wait">
      {skipAnimation || isTransitionComplete ? (
        <ReactLenis root>
          <LandingPage key={2} skipAnimation={skipAnimation} />
        </ReactLenis>
      ) : (
        <HomeIntro key={1} />
      )}
    </AnimatePresence>
  );
}

function LandingPage({ skipAnimation }: { skipAnimation?: boolean }) {
  const lenis = useLenis(null);
  const ref = useRef<HTMLDivElement>(null);

  useUpdateRootVariables({
    "--primary-color": "#141414",
    "--primary-text": "#fff",
  });

  const scrollShowcaseIntoView = () => {
    lenis.scrollTo(ref.current, {
      duration: 1.6,
    });
  };

  return (
    <div className="min-h-screen">
      <div className="doc-padding text-theme-text-white bg-theme-bg-black max-w-[1158px] m-auto h-screen min-h-[600px] flex flex-col justify-between">
        <Header entryAnimation={!skipAnimation} />
        <AnimatedLineBlock
          className="text-[2.25rem] leading-[3.25rem] md:text-[3.5rem] md:leading-[4.45rem] font-bold cursor-default"
          replacements={{
            "*:g": "/assets/globe.riv",
            "*:r": "/assets/rocket.riv",
            "*:w": "/assets/wave.riv",
          }}
        >
          Full-stack developer *:w
          <span className="text-theme-text-white-muted">passionate about</span>
          building performant *:r applications for the web *:g
          <span className="text-theme-text-white-muted">and beyond</span>
        </AnimatedLineBlock>
        <div className="overflow-hidden text-theme-text-white-muted">
          <Tween
            from={{ yPercent: 100 }}
            to={{ yPercent: 0 }}
            duration={1.5}
            ease="power4"
          >
            <button
              onClick={scrollShowcaseIntoView}
              className="flex items-center gap-2"
            >
              <span>SCROLL TO DISCOVER</span>
              <span className="mb-1 overflow-y-clip">
                <ArrowDownIcon className="w-5 h-5 animate-over-bounce" />
              </span>
            </button>
          </Tween>
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
  );
}
