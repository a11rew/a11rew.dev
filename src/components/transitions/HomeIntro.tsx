import { motion, Variants } from "framer-motion";
import { useTransitionContext } from ".";

const parent: Variants = {
  visible: {
    transition: {
      when: "beforeChildren",
      // Time between first and second text element animating in
      staggerChildren: 1.2,
    },
  },
  hidden: {},
  leaving: {
    transition: {
      delayChildren: 1,
      // Time between first and second text element animating out
      staggerChildren: 0.15,
    },
  },
};

const child: Variants = {
  visible: {
    y: 0,
    transition: {
      type: "tween",
      duration: 0.8,
    },
  },
  hidden: {
    y: "100%",
  },
  leaving: {
    y: "-10vh",
    transition: {
      type: "tween",
      duration: 6,
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
    <div className="absolute w-full h-screen overflow-y-hidden">
      <motion.div
        variants={parent}
        initial="hidden"
        animate="visible"
        exit="leaving"
        onAnimationComplete={animationEnded}
        className="flex items-center justify-center w-full h-screen bg-theme-bg-white"
      >
        <motion.div
          exit={{
            height: "50vh",
          }}
          className="flex items-center gap-1 overflow-hidden text-lg font-bold leading-9 sm:gap-2 sm:text-2xl"
        >
          <motion.p variants={child}>Andrew Glago.</motion.p>
          <motion.p variants={child}>Software Developer</motion.p>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute h-[20vh] bottom-0 left-0 w-full bg-blue-100"
        exit={{
          height: "100vh",
          transition: {
            delay: 1,
            type: "tween",
            duration: 5,
            ease: "easeInOut",
          },
        }}
      >
        <motion.div
          exit={{
            height: 0,
            transition: {
              delay: 1,
              type: "tween",
              duration: 5,
              ease: "easeInOut",
            },
          }}
          className="h-[40vh] w-full bg-theme-bg-white"
        />
        <motion.div className="h-[100vh] w-full bg-theme-bg-black" />
      </motion.div>
    </div>
  );
}
