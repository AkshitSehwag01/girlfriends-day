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
      whileHover={{ y: -4, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 320, damping: 20 }}
      className="glass rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 min-w-0"
    >
      <p
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-200 text-center tabular-nums"
        aria-hidden="true"
      >
        {String(number).padStart(2, "0")}
      </p>
      <p className="mt-3 text-center uppercase tracking-[0.2em] text-xs sm:text-sm text-pink-100/75">
        {label}
      </p>
    </motion.div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeTogether);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeTogether());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const anniversaryLabel = new Date(
    siteData.relationship.anniversary
  ).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Scene id="countdown" aria-labelledby="countdown-title">
      <SectionHeader
        titleId="countdown-title"
        title="Together Since"
        subtitle={anniversaryLabel}
      />

      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        role="timer"
        aria-live="polite"
        aria-atomic="true"
        aria-label={`Together for ${time.days} days, ${time.hours} hours, ${time.minutes} minutes, and ${time.seconds} seconds`}
      >
        <TimeCard number={time.days} label="Days" />
        <TimeCard number={time.hours} label="Hours" />
        <TimeCard number={time.minutes} label="Minutes" />
        <TimeCard number={time.seconds} label="Seconds" />
      </div>
    </Scene>
  );
}
