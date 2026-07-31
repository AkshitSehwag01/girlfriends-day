import { motion } from "framer-motion";

export default function Background() {
  return (
    <>
      <div className="fixed inset-0 -z-50 bg-[#070B1A]" />

      <motion.div
        animate={{
          x: [-80, 60, -80],
          y: [-50, 70, -50],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="fixed
        top-[-250px]
        left-[-200px]
        w-[700px]
        h-[700px]
        rounded-full
        bg-pink-500/20
        blur-[160px]
        -z-40"
      />

      <motion.div
        animate={{
          x: [70, -70, 70],
          y: [80, -60, 80],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="fixed
        bottom-[-250px]
        right-[-200px]
        w-[700px]
        h-[700px]
        rounded-full
        bg-fuchsia-500/20
        blur-[160px]
        -z-40"
      />

      <motion.div
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="fixed
        inset-0
        bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]
        -z-30"
      />
    </>
  );
}