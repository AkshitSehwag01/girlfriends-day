import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

import PrimaryButton from "../common/PrimaryButton";
import { siteData } from "../../data/siteData";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";

const fade = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -14 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

export default function IntroScreen({ onContinue }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const scenes = useMemo(
    () => [
      { id: "heart", type: "heart", hold: prefersReducedMotion ? 900 : 2200 },
      {
        id: "line1",
        type: "text",
        text: siteData.intro.line1,
        hold: prefersReducedMotion ? 900 : 2400,
      },
      {
        id: "line2",
        type: "text",
        text: siteData.intro.line2,
        hold: prefersReducedMotion ? 900 : 2400,
      },
      {
        id: "line3",
        type: "text",
        text: siteData.intro.line3,
        hold: prefersReducedMotion ? 900 : 2200,
      },
      {
        id: "date",
        type: "date",
        text: siteData.intro.line4,
        hold: prefersReducedMotion ? 1000 : 2600,
      },
      { id: "cta", type: "cta", hold: null },
    ],
    [prefersReducedMotion]
  );

  const [index, setIndex] = useState(0);
  const scene = scenes[index];
  const isFinal = scene.type === "cta";

  useEffect(() => {
    if (isFinal || scene.hold == null) return undefined;

    const timer = window.setTimeout(() => {
      setIndex((current) => Math.min(current + 1, scenes.length - 1));
    }, scene.hold);

    return () => window.clearTimeout(timer);
  }, [index, isFinal, scene.hold, scenes.length]);

  const skipToContinue = () => {
    setIndex(scenes.length - 1);
  };

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center px-[var(--section-pad-x)]"
      role="dialog"
      aria-labelledby="intro-heading"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={skipToContinue}
        className="
          absolute top-5 right-5 sm:top-8 sm:right-8 z-50
          text-sm sm:text-base text-pink-100/70 hover:text-pink-50
          underline-offset-4 hover:underline
          focus-visible:outline focus-visible:outline-2
          focus-visible:outline-offset-4 focus-visible:outline-pink-200
          rounded-sm
        "
      >
        Skip
      </button>

      <div className="relative w-full max-w-3xl min-h-[280px] sm:min-h-[320px] flex items-center justify-center text-center">
        <AnimatePresence mode="wait">
          {scene.type === "heart" && (
            <motion.div
              key="heart"
              {...fade}
              className="flex flex-col items-center gap-6"
              aria-hidden="true"
            >
              <motion.div
                animate={
                  prefersReducedMotion
                    ? { scale: 1 }
                    : { scale: [1, 1.18, 1, 1.12, 1] }
                }
                transition={
                  prefersReducedMotion
                    ? undefined
                    : {
                        duration: 1.15,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                }
              >
                <FaHeart className="text-[var(--primary)] text-6xl sm:text-7xl md:text-8xl drop-shadow-[0_0_36px_rgba(255,77,141,0.55)]" />
              </motion.div>
            </motion.div>
          )}

          {(scene.type === "text" || scene.type === "date") && (
            <motion.p
              key={scene.id}
              id={scene.type === "date" ? "intro-heading" : undefined}
              {...fade}
              className={
                scene.type === "date"
                  ? "titleFont text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-pink-100"
                  : "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-tight px-2"
              }
              aria-live="polite"
            >
              {scene.text}
            </motion.p>
          )}

          {scene.type === "cta" && (
            <motion.div
              key="cta"
              {...fade}
              className="glass-strong w-full max-w-xl rounded-[28px] md:rounded-[36px] px-8 py-12 sm:px-12 sm:py-14"
            >
              <h1
                id="intro-heading"
                className="titleFont text-4xl sm:text-5xl md:text-6xl text-pink-100"
              >
                {siteData.intro.line4}
              </h1>

              <p className="mt-6 text-base sm:text-lg text-pink-100/80">
                A little world made only for you.
              </p>

              <div className="mt-10">
                <PrimaryButton
                  onClick={onContinue}
                  aria-label="Continue to unlock our story"
                >
                  Continue
                </PrimaryButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
