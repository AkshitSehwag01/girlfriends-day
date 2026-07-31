import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

import Scene from "../common/Scene";
import SectionHeader from "../common/SectionHeader";

import photo1 from "../../assets/images/photo1.jpg";
import photo2 from "../../assets/images/photo2.jpg";
import photo3 from "../../assets/images/photo3.jpg";
import photo4 from "../../assets/images/photo4.jpg";
import photo5 from "../../assets/images/photo5.jpg";

const photos = [
  {
    image: photo1,
    caption: "The day you unknowingly became my favorite person.",
  },
  {
    image: photo2,
    caption: "One smile from you makes everything better.",
  },
  {
    image: photo3,
    caption: "Every adventure is beautiful with you.",
  },
  {
    image: photo4,
    caption: "The little moments become unforgettable with you.",
  },
  {
    image: photo5,
    caption: "If I had to choose again, I'd still choose you.",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setSelected(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <Scene className="!justify-start md:!justify-center" aria-labelledby="gallery-title">
      <SectionHeader
        titleId="gallery-title"
        eyebrow="Chapter 4"
        title="Our Beautiful Memories"
        subtitle="Every picture tells a story, every story reminds me of you."
      />

      <div className="flex flex-wrap justify-center gap-8 md:gap-10 lg:gap-12">
        {photos.map((photo, index) => (
          <motion.button
            key={photo.caption}
            type="button"
            initial={{
              opacity: 0,
              y: 40,
              rotate: index % 2 === 0 ? -6 : 6,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04, rotate: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            onClick={() => setSelected(photo)}
            aria-label={`View memory: ${photo.caption}`}
            className="
              relative bg-[#fffaf5] p-3 sm:p-4 rounded-md
              shadow-[0_25px_60px_rgba(0,0,0,0.4)]
              cursor-pointer text-left max-w-[280px] w-full
              focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-4 focus-visible:outline-pink-200
            "
          >
            <span
              className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-rose-500 shadow-lg border-2 border-white"
              aria-hidden="true"
            />

            <img
              src={photo.image}
              alt={photo.caption}
              className="w-full aspect-[4/5] object-cover rounded select-none"
              draggable="false"
              loading="lazy"
            />

            <p className="text-center mt-4 text-[var(--ink)]/75 italic text-sm sm:text-base font-medium leading-relaxed">
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
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="
                glass-strong rounded-3xl p-4 sm:p-5
                max-w-4xl w-full
                relative
              "
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close photo"
                className="
                  absolute top-4 right-4 z-10
                  bg-[var(--primary)] hover:bg-[var(--primary-deep)]
                  w-11 h-11 rounded-full text-white
                  flex items-center justify-center
                  transition-colors duration-300
                "
              >
                <FaTimes aria-hidden="true" />
              </button>

              <img
                src={selected.image}
                alt={selected.caption}
                className="w-full max-h-[65vh] sm:max-h-[70vh] object-contain rounded-2xl"
              />

              <p className="mt-6 sm:mt-8 text-center text-lg sm:text-xl md:text-2xl text-pink-50/90 italic leading-relaxed px-2">
                {selected.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Scene>
  );
}
