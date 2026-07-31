import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "../../data/siteData";

export default function Reasons() {
  const [index, setIndex] = useState(0);

  const nextReason = () => {
    if (index < siteData.reasons.length) {
      setIndex(index + 1);
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6">

      <h1 className="titleFont text-6xl md:text-8xl text-pink-200 mb-5 text-center">
        Chapter 5
      </h1>

      <p className="text-pink-100 text-2xl mb-16">
        Why I Love You ❤️
      </p>

      <AnimatePresence mode="wait">

        {index < siteData.reasons.length ? (

          <motion.div
            key={index}
            initial={{
              rotateY: 90,
              opacity: 0,
            }}
            animate={{
              rotateY: 0,
              opacity: 1,
            }}
            exit={{
              rotateY: -90,
              opacity: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            onClick={nextReason}
            className="
            w-full
            max-w-xl
            min-h-[320px]
            cursor-pointer
            rounded-[35px]
            border
            border-pink-300/20
            bg-white/10
            backdrop-blur-2xl
            shadow-2xl
            flex
            flex-col
            justify-center
            items-center
            text-center
            p-10
            "
          >

            <div className="text-6xl mb-6">
              ❤️
            </div>

            <h2 className="text-pink-300 text-2xl font-bold mb-6">
              Reason #{index + 1}
            </h2>

            <p className="text-white text-2xl leading-10">
              {siteData.reasons[index]}
            </p>

            <p className="mt-12 text-pink-200 text-sm">
              Tap anywhere to continue
            </p>

          </motion.div>

        ) : (

          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            className="
            max-w-2xl
            text-center
            rounded-[35px]
            bg-white/10
            backdrop-blur-xl
            p-12
            shadow-2xl
            "
          >

            <div className="text-7xl mb-8">
              ❤️
            </div>

            <h2 className="text-5xl text-pink-200 mb-8 titleFont">
              And One More Thing...
            </h2>

            <p className="text-white text-2xl leading-10">
              These are only ten reasons.
              <br /><br />
              The truth is...
              <br /><br />
              I'd need a lifetime
              to tell you every reason
              why I love you.
            </p>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}