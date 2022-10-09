import { motion, Variants } from "framer-motion";
import { useTransitionContext } from ".";

const parent: Variants = {
  visible: {
    transition: {
      when: "beforeChildren",
      delayChildren: 0.2,
      // Time between first and second text element animating in
      // 0.8s is the time for the first
      staggerChildren: 1.2,
    },
  },
  hidden: {},
  leaving: {
    y: "-166px", // 103.75 px per second
    transition: {
      delayChildren: 0.2,
      // Time between first and second text element animating out
      staggerChildren: -1.2,
      duration: 1.6,
    },
  },
};

const child: Variants = {
  visible: {
    y: 0,
    transition: {
      type: "spring",
      duration: 0.8,
      stiffness: 45.02,
      damping: 15,
      mass: 1,
    },
  },
  hidden: {
    y: "100%",
  },
  leaving: {
    y: "100%",
    transition: {
      type: "tween",
      duration: 1.2,
    },
  },
};

export default function HomeIntro() {
  const {
    setters: { setIsTransitionComplete },
  } = useTransitionContext();

  function animationEnded() {
    setIsTransitionComplete(true);
  }

  return (
    <div className="relative w-full h-screen overflow-y-hidden">
      <motion.div
        variants={parent}
        initial="hidden"
        animate="visible"
        exit="leaving"
        onAnimationComplete={animationEnded}
        className="flex items-center justify-center w-full h-screen bg-theme-bg-white"
      >
        <motion.div className="flex items-center gap-2 overflow-hidden text-lg font-bold leading-9 tracking-tighter sm:gap-2 sm:text-2xl">
          <motion.p variants={child}>Andrew Glago.</motion.p>
          <motion.p variants={child}>Software Developer</motion.p>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute top-0 w-full h-screen translate-y-full bg-theme-bg-black"
        exit={{
          y: "0",
          transition: {
            delay: 0.2,
            type: "tween",
            duration: 1.6,
            ease: "easeInOut",
          },
        }}
      />
    </div>
  );
}
