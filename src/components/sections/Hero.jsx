import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

import { siteData } from "../../data/siteData";
import PrimaryButton from "../common/PrimaryButton";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl text-center"
      >

        <motion.div
          animate={{
            scale: [1, 1.15, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5
          }}
        >
          <FaHeart className="mx-auto text-pink-500 text-8xl mb-8 drop-shadow-[0_0_30px_#ff4d8d]" />
        </motion.div>

        <h1 className="titleFont text-7xl md:text-9xl text-pink-200">
  Happy
</h1>

<h2 className="text-6xl font-bold mt-3">
  Girlfriend's Day
</h2>

<p className="mt-10 text-lg md:text-xl text-pink-100 leading-9 max-w-2xl mx-auto">
Every heartbeat reminds me how lucky I am
to have you in my life.

This isn't just a website.

It's a small piece of my heart made only for you.
</p>

        <div className="mt-12">
          <PrimaryButton>
            Begin Our Story ❤️
          </PrimaryButton>
        </div>

      </motion.div>

    </section>
  );
}