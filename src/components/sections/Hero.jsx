import { motion } from "framer-motion";
import { FaHeart, FaChevronDown } from "react-icons/fa";
import { siteData } from "../../data/siteData";
import PrimaryButton from "../common/PrimaryButton";
import FloatingHearts from "../effects/FloatingHearts";
import Countdown from "./Countdown";
import LoveLetter from "./LoveLetter";
import Gallery from "./Gallery";

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        <FloatingHearts />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 max-w-4xl w-full"
        >
          <div className="rounded-[40px] border border-white/10 bg-white/10 backdrop-blur-2xl p-12 shadow-2xl">

            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="flex justify-center"
            >
              <FaHeart className="text-pink-500 text-8xl drop-shadow-[0_0_40px_#ff4d8d]" />
            </motion.div>

            <h1 className="titleFont text-center text-pink-200 text-7xl md:text-9xl mt-8">
              Happy
            </h1>

            <h2 className="text-center text-white text-5xl md:text-7xl font-bold">
              Girlfriend's Day
            </h2>

            <div className="mt-10 text-center">
              <h3 className="text-3xl md:text-5xl font-semibold text-pink-300">
                {siteData.couple.yourName}
              </h3>

              <div className="text-4xl my-3">❤️</div>

              <h3 className="text-3xl md:text-5xl font-semibold text-pink-300">
                {siteData.couple.herName}
              </h3>
            </div>

            <p className="mt-12 max-w-2xl mx-auto text-center text-lg md:text-xl text-pink-100 leading-9">
              Every heartbeat reminds me how lucky I am
              <br />
              to have you in my life.
              <br />
              <br />
              This isn't just a website.
              <br />
              It's a little piece of my heart made only for you.
            </p>

            <div className="mt-14 flex justify-center">
              <PrimaryButton
                onClick={() =>
                  document
                    .getElementById("countdown")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
              >
                Begin Our Journey ✨
              </PrimaryButton>
            </div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="flex justify-center mt-12"
            >
              <FaChevronDown className="text-pink-300 text-2xl" />
            </motion.div>

          </div>
        </motion.div>
      </section>

      <Countdown />

      <LoveLetter />

      <Gallery />

    </>
  );
}