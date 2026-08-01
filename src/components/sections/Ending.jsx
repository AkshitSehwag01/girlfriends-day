import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import FloatingHearts from "../effects/FloatingHearts";
import Scene from "../common/Scene";

export default function Ending() {
  return (
    <Scene
      id="ending"
      aria-labelledby="ending-title"
      className="relative overflow-hidden"
    >
      <FloatingHearts />

      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-pink-500/10 blur-[150px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 text-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="flex justify-center text-pink-500 text-7xl mb-8"
        >
          <FaHeart />
        </motion.div>

        <p className="uppercase tracking-[0.5em] text-pink-300 text-sm">
          THE END
        </p>

        <h1
          id="ending-title"
          className="titleFont text-7xl md:text-9xl text-pink-100 mt-6"
        >
          Thank You
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .6 }}
          className="mt-10 text-2xl text-pink-100/80"
        >
          For Reading Our Story
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-14 space-y-6 text-xl text-white/80 leading-9"
        >
          <p>Every line of code...</p>
          <p>Every memory...</p>
          <p>Every heartbeat...</p>
          <p>was made only for you.</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-16 titleFont text-6xl text-pink-300"
        >
          I Love You.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
          className="mt-8 text-3xl font-semibold"
        >
          Forever,
          <br />
          Akshit ❤️
        </motion.p>
      </motion.div>
    </Scene>
  );
}