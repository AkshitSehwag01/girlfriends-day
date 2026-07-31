import { motion } from "framer-motion";
import PrimaryButton from "../common/PrimaryButton";

export default function IntroScreen({ onContinue }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-black">

      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-pink-500/20 blur-[120px]" />

      <motion.div
        className="relative z-10 text-center px-6 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-6xl md:text-8xl text-white font-bold"
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Hey Siri ❤️
        </motion.h1>

        <motion.p
          className="mt-10 text-xl text-pink-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          Before you continue...
        </motion.p>

        <motion.p
          className="mt-5 text-2xl text-white leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4 }}
        >
          I made something with all my heart.
        </motion.p>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2 }}
        >
          <PrimaryButton onClick={onContinue}>
            Continue ✨
          </PrimaryButton>
        </motion.div>
      </motion.div>
    </div>
  );
}