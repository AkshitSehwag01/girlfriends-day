import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import photo1 from "../../assets/images/photo1.jpg";
import photo2 from "../../assets/images/photo2.jpg";
import photo3 from "../../assets/images/photo3.jpg";
import photo4 from "../../assets/images/photo4.jpg";
import photo5 from "../../assets/images/photo5.jpg";

const photos = [
  {
    image: photo1,
    caption: "The day everything changed ❤️",
  },
  {
    image: photo2,
    caption: "One of my happiest memories.",
  },
  {
    image: photo3,
    caption: "Your smile makes every day brighter.",
  },
  {
    image: photo4,
    caption: "Every moment with you is special.",
  },
  {
    image: photo5,
    caption: "Forever starts with us.",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="min-h-screen py-24 px-8">

      <h1 className="titleFont text-center text-7xl text-pink-200 mb-20">
        Our Memories
      </h1>

      <div className="flex flex-wrap justify-center gap-12">

        {photos.map((photo, index) => (

          <motion.div
            key={index}
            whileHover={{
              scale: 1.08,
              rotate: 0,
              y: -10,
            }}
            initial={{
              rotate: index % 2 === 0 ? -8 : 8,
            }}
            className="bg-white p-4 rounded-md shadow-2xl cursor-pointer"
            onClick={() => setSelected(photo)}
          >

            <img
              src={photo.image}
              className="w-64 h-80 object-cover rounded"
            />

            <p className="text-center mt-5 text-gray-700 font-semibold">
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

            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"

            onClick={() => setSelected(null)}

          >

            <motion.img

              initial={{
                scale: .8,
              }}

              animate={{
                scale: 1,
              }}

              src={selected.image}

              className="max-h-[90vh] rounded-2xl"

            />

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}