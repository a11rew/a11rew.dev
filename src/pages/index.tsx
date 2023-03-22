import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { AnimatePresence } from "framer-motion";

import { sprites } from "@/assets/sprites";
import AnimatedLineBlock from "@/components/animatables/AnimatedLineBlock";
import Header from "@/components/Header";
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
      {true ? <LandingPage key={2} /> : <HomeIntro key={1} />}
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
        <main>
          <div className="relative flex flex-col justify-center h-screen">
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
              <span className="text-theme-text-white-muted">
                passionate about
              </span>
              building *:r performant applications for the web
              <span className="text-theme-text-white-muted">and beyond</span>
              *:g
            </AnimatedLineBlock>

            <div className="absolute bottom-14 text-theme-text-white-muted">
              <button className="flex items-center gap-2">
                <span>SCROLL TO DISCOVER</span>
                <span className="overflow-y-clip">
                  <ArrowDownIcon className="w-5 h-5 animate-over-bounce" />
                </span>
              </button>
            </div>
          </div>
          <div className="h-screen text-black">
            <p className="max-w-[275px] font-medium mt-14">
              Currently, I work at SuaCode.ai as a full-stack developer. My work
              is focused on building technology to help democratize STEM
              education in Africa.
            </p>

            <div>
              <div className="flex w-full h-auto gap-4 overflow-hidden mt-14">
                <h2
                  style={{
                    WebkitTextStroke: "1px #000",
                    WebkitTextFillColor: "#fff",
                  }}
                  className="italic font-bold text-[40px] transition-all ease-linear duration-200 whitespace-nowrap text-white"
                >
                  featured-work
                </h2>
                <h2
                  style={{
                    WebkitTextStroke: "1px #000",
                    WebkitTextFillColor: "#fff",
                  }}
                  className="italic font-bold text-[40px] transition-all ease-linear duration-200 whitespace-nowrap text-white"
                >
                  featured-work
                </h2>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
