import { motion, Variants } from "framer-motion";
import { useTransitionContext } from ".";

const parent: Variants = {
  visible: {
    transition: {
      when: "beforeChildren",
      // Time between first and second text element animating in
      staggerChildren: 0.8,
    },
  },
  hidden: {},
  leaving: {
    transition: {
      // Time between first and second text element animating out
      staggerChildren: 0.2,
    },
  },
};

const child: Variants = {
  visible: {
    y: 0,
    transition: {
      type: "tween",
      duration: 1.2,
    },
  },
  hidden: {
    y: "100%",
  },
  leaving: {
    y: "-10vh",
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
    <div className="absolute w-full h-screen overflow-y-hidden">
      <motion.div
        variants={parent}
        initial="hidden"
        animate="visible"
        exit="leaving"
        onAnimationComplete={animationEnded}
        className="h-screen bg-theme-bg-white w-full flex items-center justify-center"
      >
        <motion.div
          exit={{
            height: "50vh",
          }}
          className="flex gap-2 text-2xl leading-9 font-bold overflow-hidden items-center"
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
            type: "tween",
            duration: 1,
          },
        }}
      >
        <motion.div
          exit={{
            height: 0,
            transition: {
              type: "tween",
              duration: 1,
            },
          }}
          className="h-[40vh] w-full bg-theme-bg-white"
        />
        <motion.div className="h-[100vh] w-full bg-theme-bg-black" />
      </motion.div>
    </div>
  );
}
