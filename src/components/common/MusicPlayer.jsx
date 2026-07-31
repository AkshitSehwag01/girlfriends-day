import { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaMusic } from "react-icons/fa";
import { motion } from "framer-motion";

import song from "../../assets/music/iwannabeyours.mp3";
import { siteData } from "../../data/siteData";

export default function MusicPlayer({ autoPlay }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (autoPlay) setPlaying(true);
  }, [autoPlay]);

  useEffect(() => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  if (!autoPlay) return null;

  const togglePlayback = () => setPlaying((current) => !current);

  return (
    <>
      <audio ref={audioRef} loop preload="metadata">
        <source src={song} type="audio/mpeg" />
      </audio>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="
          fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50
          glass-strong rounded-2xl sm:rounded-3xl
          px-4 py-3 sm:px-5 sm:py-4
          flex items-center gap-3 sm:gap-4
          max-w-[calc(100vw-2rem)]
        "
        role="region"
        aria-label="Music player"
      >
        <motion.div
          animate={{ rotate: playing ? 360 : 0 }}
          transition={{
            duration: 4,
            repeat: playing ? Infinity : 0,
            ease: "linear",
          }}
          className="
            w-11 h-11 sm:w-14 sm:h-14 shrink-0 rounded-full
            bg-gradient-to-br from-pink-500 to-rose-600
            flex items-center justify-center text-white shadow-lg
          "
          aria-hidden="true"
        >
          <FaMusic />
        </motion.div>

        <div className="min-w-0">
          <p className="text-white font-semibold text-sm sm:text-base truncate">
            {siteData.music.title}
          </p>
          <p className="text-pink-200/80 text-xs sm:text-sm truncate">
            {siteData.music.artist}
          </p>
        </div>

        <button
          type="button"
          onClick={togglePlayback}
          aria-label={playing ? "Pause music" : "Play music"}
          className="
            ml-1 shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full
            bg-[var(--primary)] hover:bg-[var(--primary-deep)]
            text-white flex items-center justify-center
            transition-colors duration-300
            focus-visible:outline focus-visible:outline-2
            focus-visible:outline-offset-2 focus-visible:outline-pink-200
          "
        >
          {playing ? <FaPause aria-hidden="true" /> : <FaPlay aria-hidden="true" />}
        </button>
      </motion.div>
    </>
  );
}
