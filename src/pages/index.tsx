import { AnimatePresence } from "framer-motion";

import SEO from "@/components/SEO";
import {
  TransitionContextProvider,
  useTransitionContext,
} from "@/components/transitions";
import HomeIntro from "@/components/transitions/HomeIntro";
import Header from "@/components/Header";
import Wave from "@/assets/sprites/wave.svg";
import Rocket from "@/assets/sprites/rocket.svg";
import Globe from "@/assets/sprites/globe.svg";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

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
  return (
    <div className="min-h-screen text-theme-text-white bg-theme-bg-black">
      <div className="max-w-[1158px] m-auto px-6 h-screen">
        <div className="fixed z-10 top-0 pt-16 w-full max-w-[1158px] m-auto pr-12">
          <Header />
        </div>
        <main className="relative flex flex-col justify-center h-screen">
          <div className="text-[2.25rem] leading-[3.25rem] md:text-[3.5rem] md:leading-[4.25rem] font-bold">
            <span className="text-theme-text-white-muted">I am a</span> software
            developer <Wave className="inline" />{" "}
            <span className="text-theme-text-white-muted">
              passionate about
            </span>{" "}
            building <Rocket className="inline" /> performant applications for
            the web
            <span className="text-theme-text-white-muted">
              {" "}
              and beyond
            </span>{" "}
            <Globe className="inline" />
          </div>

          <div className="absolute bottom-14 text-theme-text-white-muted">
            <button className="flex items-center gap-2">
              <span>SCROLL TO DISCOVER</span>
              <span className="overflow-y-clip">
                <ArrowDownIcon className="w-5 h-5 animate-over-bounce" />
              </span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
