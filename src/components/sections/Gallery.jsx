import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

import photo1 from "../../assets/images/photo1.jpg";
import photo2 from "../../assets/images/photo2.jpg";
import photo3 from "../../assets/images/photo3.jpg";
import photo4 from "../../assets/images/photo4.jpg";
import photo5 from "../../assets/images/photo5.jpg";

const photos = [
  {
    image: photo1,
    caption: "The day you unknowingly became my favorite person ❤️",
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
    caption: "If I had to choose again, I'd still choose you. ❤️",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="relative min-h-screen py-28 px-6 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-900/5 to-transparent pointer-events-none" />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="titleFont text-center text-7xl md:text-8xl text-pink-200 mb-6"
      >
        Our Beautiful Memories
      </motion.h1>

      <p className="text-center text-pink-100 mb-20 text-lg">
        Every picture tells a story, every story reminds me of you ❤️
      </p>

      <div className="flex flex-wrap justify-center gap-12">

        {photos.map((photo, index) => (

          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 50,
              rotate: index % 2 === 0 ? -8 : 8,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            whileHover={{
              scale: 1.08,
              rotate: 0,
              y: -15,
            }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            onClick={() => setSelected(photo)}
            className="
              relative
              bg-[#fffaf5]
              p-4
              rounded-md
              shadow-[0_25px_60px_rgba(0,0,0,.45)]
              cursor-pointer
              transition-all
              duration-500
            "
          >

            {/* Pin */}

            <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-5 h-5 rounded-full bg-red-500 shadow-lg border-2 border-white" />

            <img
              src={photo.image}
              alt=""
              className="w-64 h-80 object-cover rounded select-none"
              draggable="false"
            />

            <p className="text-center mt-5 text-gray-700 italic text-lg font-medium">
              {photo.caption}
            </p>

          </motion.div>

        ))}

      </div>

      <AnimatePresence>

        {selected && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-50
              bg-black/80
              backdrop-blur-lg
              flex
              items-center
              justify-center
              p-6
            "
            onClick={() => setSelected(null)}
          >

            <motion.div
              initial={{
                scale: .8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: .8,
                opacity: 0,
              }}
              transition={{
                duration: .4,
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                bg-white
                rounded-3xl
                p-5
                max-w-4xl
                w-full
                shadow-[0_30px_80px_rgba(0,0,0,.6)]
                relative
              "
            >

              <button
                onClick={() => setSelected(null)}
                className="
                  absolute
                  top-5
                  right-5
                  bg-pink-500
                  hover:bg-pink-600
                  w-11
                  h-11
                  rounded-full
                  text-white
                  flex
                  items-center
                  justify-center
                "
              >
                <FaTimes />
              </button>

              <img
                src={selected.image}
                alt=""
                className="
                  w-full
                  max-h-[70vh]
                  object-contain
                  rounded-2xl
                "
              />

              <p className="mt-8 text-center text-2xl text-gray-700 italic leading-relaxed">
                {selected.caption}
              </p>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}