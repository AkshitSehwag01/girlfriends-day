import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { siteData } from "../../data/siteData";

function getTimeTogether() {
  const start = new Date(siteData.relationship.anniversary);
  const now = new Date();

  const diff = now - start;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;

  const minutes = Math.floor(diff / (1000 * 60)) % 60;

  const seconds = Math.floor(diff / 1000) % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeTogether());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeTogether());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const Card = ({ number, label }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-8 w-40 shadow-xl"
    >
      <h2 className="text-5xl font-bold text-pink-300 text-center">
        {number}
      </h2>

      <p className="mt-4 text-center uppercase tracking-widest text-pink-100">
        {label}
      </p>
    </motion.div>
  );

  return (
    <section
  id="countdown"
  className="min-h-screen flex flex-col items-center justify-center px-6"
>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="titleFont text-6xl md:text-8xl text-pink-200"
      >
        Together Since ❤️
      </motion.h1>

      <p className="mt-6 text-xl text-pink-100">
        30 May 2026
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">

        <Card number={time.days} label="Days" />

        <Card number={time.hours} label="Hours" />

        <Card number={time.minutes} label="Minutes" />

        <Card number={time.seconds} label="Seconds" />

      </div>

    </section>
  );
}