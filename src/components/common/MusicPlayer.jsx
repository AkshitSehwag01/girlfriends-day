import { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaMusic } from "react-icons/fa";
import { motion } from "framer-motion";

import song from "../../assets/music/iwannabeyours.mp3";

export default function MusicPlayer({ autoPlay }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  // Start music automatically after unlocking
  useEffect(() => {
    if (autoPlay) {
      setPlaying(true);
    }
  }, [autoPlay]);

  // Actually play or pause the audio
  useEffect(() => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  if (!autoPlay) return null;

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={song} type="audio/mpeg" />
      </audio>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          fixed
          bottom-6
          right-6
          z-50
          bg-white/10
          backdrop-blur-2xl
          border
          border-white/20
          rounded-3xl
          px-5
          py-4
          shadow-2xl
          flex
          items-center
          gap-4
        "
      >
        <motion.div
          animate={{
            rotate: playing ? 360 : 0,
          }}
          transition={{
            duration: 4,
            repeat: playing ? Infinity : 0,
            ease: "linear",
          }}
          className="
            w-14
            h-14
            rounded-full
            bg-gradient-to-br
            from-pink-500
            to-purple-500
            flex
            items-center
            justify-center
            text-white
            shadow-lg
          "
        >
          <FaMusic />
        </motion.div>

        <div>
          <h3 className="text-white font-semibold">
            I Wanna Be Yours
          </h3>

          <p className="text-pink-200 text-sm">
            Arctic Monkeys
          </p>
        </div>

        <button
          onClick={() => setPlaying(!playing)}
          className="
            ml-3
            w-12
            h-12
            rounded-full
            bg-pink-500
            hover:bg-pink-600
            text-white
            flex
            items-center
            justify-center
            transition-all
            duration-300
            hover:scale-110
          "
        >
          {playing ? <FaPause /> : <FaPlay />}
        </button>
      </motion.div>
    </>
  );
}