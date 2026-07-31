import { motion } from "framer-motion";

export default function Moon() {
  return (
    <>
      <motion.div
        animate={{
          opacity: [0.8, 1, 0.8],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="fixed top-16 right-16 w-36 h-36 rounded-full bg-white shadow-[0_0_120px_40px_rgba(255,255,255,.35)] -z-20"
      />

      <div
        className="fixed top-20 right-20 w-28 h-28 rounded-full bg-gray-100 opacity-95 -z-10"
      />
    </>
  );
}