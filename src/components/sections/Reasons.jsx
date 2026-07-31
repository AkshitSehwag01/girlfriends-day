import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "../../data/siteData";
import Scene from "../common/Scene";
import SectionHeader from "../common/SectionHeader";
import GlassPanel from "../common/GlassPanel";

export default function Reasons() {
  const [index, setIndex] = useState(0);
  const isComplete = index >= siteData.reasons.length;

  const nextReason = () => {
    if (!isComplete) setIndex((current) => current + 1);
  };

  return (
    <Scene aria-labelledby="reasons-title">
      <SectionHeader
        titleId="reasons-title"
        eyebrow="Chapter 5"
        title="Why I Love You"
        subtitle="Tap through each reason — one heartbeat at a time."
      />

      <div className="flex justify-center">
        <AnimatePresence mode="wait">
          {!isComplete ? (
            <GlassPanel
              key={index}
              strong
              motionProps={{
                initial: { rotateY: 70, opacity: 0 },
                animate: { rotateY: 0, opacity: 1 },
                exit: { rotateY: -70, opacity: 0 },
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                whileInView: undefined,
                viewport: undefined,
              }}
              onClick={nextReason}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  nextReason();
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Reason ${index + 1} of ${siteData.reasons.length}. Activate to continue.`}
              className="
                max-w-xl min-h-[300px] sm:min-h-[320px]
                cursor-pointer text-center
                flex flex-col justify-center items-center
                focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-4 focus-visible:outline-pink-200
              "
              style={{ transformStyle: "preserve-3d" }}
            >
              <span className="text-5xl mb-5" aria-hidden="true">
                ♥
              </span>

              <h3 className="text-pink-200 text-xl sm:text-2xl font-semibold mb-5">
                Reason #{index + 1}
              </h3>

              <p className="text-white text-xl sm:text-2xl leading-relaxed max-w-md">
                {siteData.reasons[index]}
              </p>

              <p className="mt-10 text-pink-200/70 text-sm">
                Tap anywhere to continue
              </p>
            </GlassPanel>
          ) : (
            <GlassPanel
              key="finale"
              strong
              className="max-w-2xl text-center"
              motionProps={{
                initial: { scale: 0.92, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                whileInView: undefined,
                viewport: undefined,
                transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
              }}
            >
              <span className="text-6xl mb-6 block" aria-hidden="true">
                ♥
              </span>

              <h3 className="text-4xl sm:text-5xl text-pink-100 mb-6 titleFont">
                And One More Thing...
              </h3>

              <p className="text-white/95 text-lg sm:text-xl leading-relaxed">
                These are only ten reasons.
                <br />
                <br />
                The truth is...
                <br />
                <br />
                I&apos;d need a lifetime to tell you every reason why I love you.
              </p>
            </GlassPanel>
          )}
        </AnimatePresence>
      </div>
    </Scene>
  );
}
