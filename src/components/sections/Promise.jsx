import { motion } from "framer-motion";
import { siteData } from "../../data/siteData";

export default function Promise() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="
        max-w-3xl
        w-full
        rounded-[40px]
        bg-white/10
        backdrop-blur-2xl
        border
        border-white/10
        p-12
        shadow-[0_25px_80px_rgba(255,105,180,.2)]
        text-center
        "
      >

        <div className="text-7xl mb-8">
          💍
        </div>

        <h1 className="titleFont text-6xl text-pink-200 mb-10">
          Chapter 6
        </h1>

        <h2 className="text-3xl font-bold text-white mb-10">
          A Promise To You
        </h2>

        <p className="text-xl text-pink-100 leading-10 whitespace-pre-line">
          {siteData.promise}
        </p>

        <div className="mt-14 text-pink-300 text-2xl">
          Forever Yours,
        </div>

        <div className="text-4xl font-bold text-white mt-3">
          {siteData.couple.yourName} ❤️
        </div>

      </motion.div>

    </section>
  );
}