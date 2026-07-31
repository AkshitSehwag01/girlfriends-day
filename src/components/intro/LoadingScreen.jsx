import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-pink-100 via-pink-200 to-rose-300">
      <div className="text-center">

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
          className="flex justify-center"
        >
          <FaHeart className="text-pink-600 text-8xl drop-shadow-xl" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .3 }}
          className="mt-8 text-5xl font-bold text-pink-700"
        >
          Preparing Something Special...
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8 }}
          className="mt-5 text-xl text-pink-900"
        >
          Loading our love story ❤️
        </motion.p>

      </div>
    </div>
  );
}