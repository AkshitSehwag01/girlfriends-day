import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { siteData } from "../../data/siteData";

export default function LoveLetter() {
  const [opened, setOpened] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      {!opened ? (

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpened(true)}
          className="cursor-pointer"
        >

          <div className="w-[340px] h-[220px] rounded-2xl bg-gradient-to-br from-pink-200 to-pink-100 shadow-2xl relative">

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white text-3xl shadow-xl">
                ❤️
              </div>

            </div>

            <div className="absolute bottom-5 w-full text-center text-gray-700 font-semibold">
              Click to Open
            </div>

          </div>

        </motion.div>

      ) : (

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl rounded-[40px] bg-[#fffaf5] text-gray-800 p-10 shadow-2xl"
        >

          <h1 className="titleFont text-6xl text-center text-pink-600 mb-10">
            My Dearest Siri ❤️
          </h1>

          <TypeAnimation
            sequence={[siteData.letter]}
            speed={70}
            cursor={false}
            className="whitespace-pre-line leading-9 text-lg"
          />

        </motion.div>

      )}

    </section>
  );
}