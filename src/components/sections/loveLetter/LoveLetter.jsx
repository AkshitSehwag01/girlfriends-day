import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { siteData } from "../../../data/siteData";
import Scene from "../../common/Scene";
import SectionHeader from "../../common/SectionHeader";
import Envelope from "./Envelope";

export default function LoveLetter() {
  const [opened, setOpened] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleOpen = () => {
    if (opened) return;

    setOpened(true);

    setTimeout(() => {
      setShowLetter(true);
    }, 900);
  };

  return (
    <Scene
  id="letter"
  aria-labelledby="letter-title"
>
      <SectionHeader
        titleId="letter-title"
        eyebrow="Chapter 3"
        title="A Letter For You"
        subtitle="Something written just for your eyes."
      />

      <div className="flex w-full items-center justify-center py-20">

        <AnimatePresence mode="wait">

          {!showLetter ? (

            <motion.div
              key="envelope"
              initial={{ opacity: 1 }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              transition={{
                duration: 0.5,
              }}
              className="flex justify-center"
            >
              <Envelope
                opened={opened}
                onOpen={handleOpen}
              />
            </motion.div>

          ) : (

            <motion.article
              key="letter"
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                w-full
                max-w-3xl
                rounded-[36px]
                border
                border-[#ead8ba]
                bg-[#fffdf8]
                p-8
                md:p-12
                shadow-[0_30px_80px_rgba(0,0,0,.35)]
              "
            >

              <h3 className="titleFont mb-10 text-center text-6xl text-pink-600">
                My Dearest {siteData.couple.nickname}
              </h3>

              <TypeAnimation
                sequence={[siteData.letter]}
                speed={65}
                cursor={false}
                className="
                  whitespace-pre-line
                  text-lg
                  leading-9
                  text-[var(--ink)]
                "
              />

              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 4,
                  duration: 1,
                }}
                className="
                  titleFont
                  mt-12
                  text-right
                  text-5xl
                  text-pink-500
                "
              >
                Love,
                <br />
                Akshit ❤️
              </motion.p>

            </motion.article>

          )}

        </AnimatePresence>
      </div>

    </Scene>
  );
}