import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaPlay,
  FaPause,
  FaMusic,
} from "react-icons/fa";

import song from "../../assets/music/iwannabeyours.mp3";

export default function MusicPlayer({ autoPlay }) {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const update = () => {
      setCurrent(audio.currentTime);
      setDuration(audio.duration || 0);

      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.addEventListener("timeupdate", update);
    audio.addEventListener("loadedmetadata", update);

    return () => {
      audio.removeEventListener("timeupdate", update);
      audio.removeEventListener("loadedmetadata", update);
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    if (autoPlay) {
      audioRef.current.play();
      setPlaying(true);
    }
  }, [autoPlay]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  const format = (time) => {
    if (!time) return "0:00";

    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60);

    return `${m}:${String(s).padStart(2, "0")}`;
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={song}
        loop
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        animate={{
          opacity: autoPlay ? 1 : 0,
          y: autoPlay ? 0 : 80,
        }}
        className="
        fixed
        bottom-6
        right-6
        z-50
        w-[340px]
        rounded-3xl
        glass-strong
        p-5
        shadow-[0_25px_70px_rgba(0,0,0,.45)]
        "
      >
        <div className="flex gap-4 items-center">

          <motion.div
            animate={{
              rotate: playing ? 360 : 0,
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "linear",
            }}
            className="
            w-16
            h-16
            rounded-full
            bg-gradient-to-br
            from-pink-500
            to-fuchsia-600
            flex
            items-center
            justify-center
            shadow-xl
            "
          >
            <FaMusic className="text-white text-xl" />
          </motion.div>

          <div className="flex-1">

            <p className="text-xs uppercase tracking-[0.3em] text-pink-300">
              Now Playing
            </p>

            <h3 className="text-white font-semibold">
              I Wanna Be Yours
            </h3>

            <p className="text-pink-200 text-sm">
              Arctic Monkeys
            </p>

          </div>

          <button
            onClick={toggleMusic}
            className="
            w-12
            h-12
            rounded-full
            bg-pink-500
            hover:bg-pink-600
            transition
            flex
            items-center
            justify-center
            text-white
            "
          >
            {playing ? <FaPause /> : <FaPlay />}
          </button>

        </div>

        {/* Progress */}

        <div className="mt-5">

          <div className="h-1 rounded-full bg-white/10 overflow-hidden">

            <motion.div
              className="h-full bg-pink-400"
              animate={{
                width: `${progress}%`,
              }}
            />

          </div>

          <div className="flex justify-between mt-2 text-xs text-pink-200">

            <span>{format(current)}</span>

            <span>{format(duration)}</span>

          </div>

        </div>

        {/* Equalizer */}

        <div className="flex gap-1 mt-4">

          {[0, 1, 2, 3, 4].map((bar) => (
            <motion.div
              key={bar}
              animate={
                playing
                  ? {
                      height: [8, 20, 12, 24, 8],
                    }
                  : {
                      height: 8,
                    }
              }
              transition={{
                repeat: Infinity,
                duration: 0.8,
                delay: bar * 0.12,
              }}
              className="
              w-1.5
              rounded-full
              bg-pink-400
              "
            />
          ))}

        </div>

      </motion.div>
    </>
  );
}