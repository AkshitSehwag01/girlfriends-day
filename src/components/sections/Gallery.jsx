import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

import Scene from "../common/Scene";
import SectionHeader from "../common/SectionHeader";

import photo1 from "../../assets/images/photo1.JPG";
import photo2 from "../../assets/images/photo2.JPG";
import photo3 from "../../assets/images/photo3.JPG";
import photo4 from "../../assets/images/photo4.JPG";
import photo5 from "../../assets/images/photo5.JPG";

const photos = [
  {
    image: photo1,
    caption: "The day you unknowingly became my favorite person.",
    rotation: -6,
  },
  {
    image: photo2,
    caption: "One smile from you makes everything better.",
    rotation: 5,
  },
  {
    image: photo3,
    caption: "Every adventure is beautiful with you.",
    rotation: -4,
  },
  {
    image: photo4,
    caption: "The little moments become unforgettable with you.",
    rotation: 7,
  },
  {
    image: photo5,
    caption: "If I had to choose again, I'd still choose you.",
    rotation: -5,
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelected(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected]);

  return (
    <Scene
      id="gallery"
      className="!justify-start md:!justify-center"
      aria-labelledby="gallery-title"
    >
      <SectionHeader
        titleId="gallery-title"
        eyebrow="Chapter IV"
        title="Our Little Scrapbook"
        subtitle="Every picture reminds me why I fell in love with you."
      />

      <div className="flex flex-wrap justify-center gap-10 md:gap-12">

        {photos.map((photo) => (
          <motion.button
            key={photo.caption}
            type="button"
            initial={{
              opacity: 0,
              y: 40,
              rotate: photo.rotation,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            whileHover={{
              scale: 1.06,
              rotate: 0,
              y: -14,
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            onClick={() => setSelected(photo)}
            aria-label={`View memory: ${photo.caption}`}
            className="
              relative
              bg-[#fffaf5]
              p-4
              rounded-md
              shadow-[0_30px_70px_rgba(0,0,0,.4)]
              cursor-pointer
              max-w-[290px]
              w-full
              overflow-hidden
              transition-all
            "
          >
            {/* Decorative Tape */}

            <div className="absolute left-6 top-2 w-10 h-3 rounded-sm bg-yellow-100/80 rotate-[-12deg]" />

            <div className="absolute right-6 top-2 w-10 h-3 rounded-sm bg-yellow-100/80 rotate-[12deg]" />

            <img
              src={photo.image}
              alt={photo.caption}
              loading="lazy"
              draggable="false"
              className="
                w-full
                aspect-[4/5]
                object-cover
                rounded
                select-none
              "
            />

            <p
              className="
                mt-5
                text-center
                italic
                text-[var(--ink)]
                text-sm
                sm:text-base
                leading-relaxed
              "
            >
              {photo.caption}
            </p>
          </motion.button>
        ))}

      </div>

      <AnimatePresence>

        {selected && (

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={selected.caption}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="
              fixed
              inset-0
              z-50
              bg-black/80
              backdrop-blur-xl
              flex
              items-center
              justify-center
              p-6
            "
          >

            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                glass-strong
                relative
                rounded-3xl
                p-5
                max-w-5xl
                w-full
              "
            >

              <button
                type="button"
                aria-label="Close photo"
                onClick={() => setSelected(null)}
                className="
                  absolute
                  top-4
                  right-4
                  z-10
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-[var(--primary)]
                  text-white
                  transition
                  hover:scale-110
                "
              >
                <FaTimes />
              </button>

              <img
                src={selected.image}
                alt={selected.caption}
                className="
                  w-full
                  max-h-[72vh]
                  object-contain
                  rounded-2xl
                "
              />

              <motion.p
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2,
                }}
                className="
                  mt-8
                  text-center
                  text-xl
                  italic
                  text-pink-50
                  leading-relaxed
                "
              >
                {selected.caption}
              </motion.p>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </Scene>
  );
}