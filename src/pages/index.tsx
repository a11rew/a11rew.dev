import { AnimatePresence } from "framer-motion";

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
      {!isTransitionComplete && <HomeIntro key={1} />}
      <LandingPage key={2} />
    </AnimatePresence>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen text-theme-text-white bg-theme-bg-black">
      <main>Landing</main>
    </div>
  );
}
