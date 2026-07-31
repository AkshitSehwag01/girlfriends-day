import { motion } from "framer-motion";

export default function ShootingStar() {
  return (
    <motion.div
      initial={{
        x: -300,
        y: -200,
        opacity: 0,
      }}
      animate={{
        x: 1600,
        y: 800,
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatDelay: 8,
        ease: "linear",
      }}
      className="fixed top-0 left-0 w-52 h-[2px] bg-white shadow-[0_0_20px_white] rotate-[25deg] -z-10"
    />
  );
}