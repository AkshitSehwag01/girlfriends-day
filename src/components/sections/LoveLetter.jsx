import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { siteData } from "../../data/siteData";
import Scene from "../common/Scene";
import SectionHeader from "../common/SectionHeader";

export default function LoveLetter() {
  const [opened, setOpened] = useState(false);

  return (
    <Scene aria-labelledby="letter-title">
      <SectionHeader
        titleId="letter-title"
        eyebrow="Chapter 3"
        title="A Letter For You"
        subtitle="Something written just for your eyes."
      />

      <div className="flex justify-center">
        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.button
              key="envelope"
              type="button"
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setOpened(true)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpened(true);
                }
              }}
              aria-label="Open the love letter"
              className="
                w-full max-w-[340px] h-[220px]
                rounded-2xl
                bg-gradient-to-br from-pink-200/95 to-rose-100
                shadow-[0_25px_60px_rgba(0,0,0,0.35)]
                relative cursor-pointer
                border border-white/40
                focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-4 focus-visible:outline-pink-200
              "
            >
              <span
                className="absolute inset-0 flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[var(--primary)] flex items-center justify-center text-white text-2xl sm:text-3xl shadow-xl">
                  ♥
                </span>
              </span>

              <span className="absolute bottom-5 w-full text-center text-[var(--ink)]/70 font-semibold">
                Click to Open
              </span>
            </motion.button>
          ) : (
            <motion.article
              key="letter"
              initial={{ opacity: 0, y: 48, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="
                max-w-3xl w-full
                rounded-[28px] md:rounded-[36px]
                bg-[#fffaf5] text-[var(--ink)]
                p-8 sm:p-10 md:p-12
                shadow-[0_30px_80px_rgba(0,0,0,0.35)]
                border border-white/50
              "
              aria-live="polite"
            >
              <h3 className="titleFont text-4xl sm:text-5xl md:text-6xl text-center text-pink-600 mb-8 md:mb-10">
                My Dearest {siteData.couple.nickname}
              </h3>

              <TypeAnimation
                sequence={[siteData.letter]}
                speed={70}
                cursor={false}
                className="whitespace-pre-line leading-8 sm:leading-9 text-base sm:text-lg"
              />
            </motion.article>
          )}
        </AnimatePresence>
      </div>
    </Scene>
  );
}
