import { motion } from "framer-motion";
import PrimaryButton from "../common/PrimaryButton";
import { siteData } from "../../data/siteData";

const line = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

export default function IntroScreen({ onContinue }) {
  const name = siteData.couple.nickname || siteData.couple.herName;

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center overflow-hidden px-[var(--section-pad-x)]"
      role="dialog"
      aria-labelledby="intro-heading"
      aria-modal="true"
    >
      <div
        className="absolute w-[min(90vw,520px)] h-[min(90vw,520px)] rounded-full bg-pink-500/20 blur-[120px]"
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 text-center max-w-2xl w-full glass rounded-[32px] md:rounded-[40px] px-8 py-14 sm:px-12 sm:py-16"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h1
          id="intro-heading"
          className="titleFont text-5xl sm:text-6xl md:text-8xl text-pink-100 leading-tight"
          variants={line}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.35, duration: 0.9 }}
        >
          Hey {name}
        </motion.h1>

        <motion.p
          className="mt-8 sm:mt-10 text-lg sm:text-xl text-pink-100/80"
          variants={line}
          initial="initial"
          animate="animate"
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Before you continue...
        </motion.p>

        <motion.p
          className="mt-4 sm:mt-5 text-xl sm:text-2xl text-white/95 leading-relaxed"
          variants={line}
          initial="initial"
          animate="animate"
          transition={{ delay: 2.0, duration: 0.8 }}
        >
          I made something with all my heart.
        </motion.p>

        <motion.div
          className="mt-12 sm:mt-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.7 }}
        >
          <PrimaryButton onClick={onContinue} aria-label="Continue to unlock">
            Continue
          </PrimaryButton>
        </motion.div>
      </motion.div>
    </div>
  );
}
