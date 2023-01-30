import {
  AnimatePresence,
  useScroll,
  motion,
  useInView,
  useTransform,
  useVelocity,
  useSpring,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";

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
import { useRef } from "react";

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
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    stiffness: 300,
    damping: 50,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(0, -25, v)}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * -5 * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    if (velocityFactor.get() !== 0) {
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    }
  });

  return (
    <div className="min-h-screen text-theme-text-white bg-theme-bg-black">
      <div className="max-w-[1158px] m-auto px-6 h-screen">
        <div className="fixed z-10 top-0 pt-16 w-full max-w-[1158px] m-auto pr-12">
          <Header />
        </div>
        <main>
          <div className="relative flex flex-col justify-center h-screen">
            <div className="text-[2.25rem] leading-[3.25rem] md:text-[3.5rem] md:leading-[4.25rem] font-bold">
              <span className="text-theme-text-white-muted">I am a</span>{" "}
              software developer <Wave className="inline" />{" "}
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
          </div>
          <div className="h-screen text-black">
            <p className="max-w-[275px] font-medium mt-14">
              Currently, I work at SuaCode.ai as a full-stack developer. My work
              is focused on building technology to help democratize STEM
              education in Africa.
            </p>

            <div>
              <motion.div
                style={{ x }}
                className="flex w-full h-auto gap-4 overflow-hidden mt-14"
              >
                <motion.h2
                  style={{
                    WebkitTextStroke: "1px #000",
                    WebkitTextFillColor: "#fff",
                  }}
                  className="italic font-bold text-[40px] transition-all ease-linear duration-200 whitespace-nowrap text-white"
                >
                  featured-work
                </motion.h2>
                <motion.h2
                  style={{
                    WebkitTextStroke: "1px #000",
                    WebkitTextFillColor: "#fff",
                  }}
                  className="italic font-bold text-[40px] transition-all ease-linear duration-200 whitespace-nowrap text-white"
                >
                  featured-work
                </motion.h2>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};
