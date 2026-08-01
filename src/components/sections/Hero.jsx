import { motion } from "framer-motion";
import { FaHeart, FaChevronDown } from "react-icons/fa";
import { siteData } from "../../data/siteData";
import PrimaryButton from "../common/PrimaryButton";
import GlassPanel from "../common/GlassPanel";
import { useSmoothScroll } from "../common/SmoothScroll";
import FloatingHearts from "../effects/FloatingHearts";
import Countdown from "./Countdown";
import LoveLetter from "./LoveLetter";
import Gallery from "./Gallery";
import Reasons from "./Reasons";
import Promise from "./Promise";

export default function Hero() {
  const { scrollTo } = useSmoothScroll();

  const scrollToJourney = () => {
    scrollTo("#countdown");
  };

  return (
    <main>
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-[var(--section-pad-x)] py-[var(--section-pad-y)]"
        aria-labelledby="hero-title"
      >
        <FloatingHearts />

        <GlassPanel
          className="relative z-10 max-w-4xl text-center"
          motionProps={{
            initial: { opacity: 0, y: 56 },
            animate: { opacity: 1, y: 0 },
            whileInView: undefined,
            viewport: undefined,
            transition: { duration: 1.15, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center"
            aria-hidden="true"
          >
            <FaHeart className="text-[var(--primary)] text-6xl sm:text-7xl md:text-8xl drop-shadow-[0_0_40px_#ff4d8d]" />
          </motion.div>

          <h1
            id="hero-title"
            className="titleFont text-pink-100 text-6xl sm:text-7xl md:text-8xl lg:text-9xl mt-6 md:mt-8 leading-none"
          >
            Happy
          </h1>

          <p className="mt-2 md:mt-3 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
            Girlfriend&apos;s Day
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-pink-200">
              {siteData.couple.yourName}
            </h2>

            <span
              className="text-pink-400 text-2xl sm:text-3xl"
              aria-hidden="true"
            >
              ♥
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-pink-200">
              {siteData.couple.herName}
            </h2>
          </div>

          <p className="mt-8 md:mt-10 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-pink-50/85 leading-relaxed">
            Every heartbeat reminds me how lucky I am to have you in my life.
            <span className="block mt-4">
              This isn&apos;t just a website. It&apos;s a little piece of my
              heart made only for you.
            </span>
          </p>

          <div className="mt-10 md:mt-12 flex justify-center">
            <PrimaryButton
              onClick={scrollToJourney}
              aria-label="Begin our journey and scroll to countdown"
            >
              Begin Our Journey
            </PrimaryButton>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.9, ease: "easeInOut" }}
            className="flex justify-center mt-10"
            aria-hidden="true"
          >
            <FaChevronDown className="text-pink-300/80 text-xl" />
          </motion.div>
        </GlassPanel>
      </section>

      <Countdown />
      <LoveLetter />
      <Gallery />
      <Reasons />
      <Promise />
    </main>
  );
}
