import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { siteData } from "../../data/siteData";
import Scene from "../common/Scene";
import SectionHeader from "../common/SectionHeader";

function getTimeTogether() {
  const start = new Date(siteData.relationship.anniversary);
  const now = new Date();

  const diff = Math.max(0, now - start);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor(diff / (1000 * 60 * 60)) % 24,
    minutes: Math.floor(diff / (1000 * 60)) % 60,
    seconds: Math.floor(diff / 1000) % 60,
  };
}

function TimeCard({ number, label }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.04,
      }}
      transition={{
        type: "spring",
        stiffness: 320,
        damping: 20,
      }}
      className="
      glass
      rounded-3xl
      p-6
      md:p-8
      text-center
      "
    >
      <h2 className="text-4xl md:text-6xl font-bold text-pink-200 tabular-nums">
        {String(number).padStart(2, "0")}
      </h2>

      <p className="mt-3 uppercase tracking-[0.25em] text-xs text-pink-100/70">
        {label}
      </p>
    </motion.div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeTogether);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeTogether());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const anniversaryLabel = new Date(
    siteData.relationship.anniversary
  ).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Scene
      id="countdown"
      aria-labelledby="countdown-title"
    >
      <SectionHeader
        titleId="countdown-title"
        eyebrow="Chapter II"
        title="Every Second With You"
        subtitle={`Since ${anniversaryLabel}`}
      />

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="
        mx-auto
        mb-14
        max-w-2xl
        text-center
        text-pink-100/80
        text-lg
        leading-8
        "
      >
        Every second we've shared has become another beautiful memory.
        This timer isn't counting down.
        It's counting everything we've experienced together.
      </motion.p>

      <div
        role="timer"
        aria-live="polite"
        aria-atomic="true"
        className="
        grid
        grid-cols-2
        md:grid-cols-4
        gap-6
        "
      >
        <TimeCard number={time.days} label="Days" />
        <TimeCard number={time.hours} label="Hours" />
        <TimeCard number={time.minutes} label="Minutes" />
        <TimeCard number={time.seconds} label="Seconds" />
      </div>
    </Scene>
  );
}