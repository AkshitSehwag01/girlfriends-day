import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const hearts = Array.from({ length: 35 }).map((_, index) => ({
  id: index,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: 10 + Math.random() * 26,
  delay: Math.random() * 6,
  duration: 5 + Math.random() * 6,
  opacity: 0.15 + Math.random() * 0.35,
  rotate: Math.random() * 360,
}));

export default function FloatingHearts() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.left}%`,
            top: `${heart.top}%`,
          }}
          animate={{
            y: [0, -18, 0],
            x: [0, 8, -8, 0],
            rotate: [
              heart.rotate,
              heart.rotate + 12,
              heart.rotate - 12,
              heart.rotate,
            ],
            scale: [1, 1.15, 1],
            opacity: [
              heart.opacity,
              heart.opacity + 0.15,
              heart.opacity,
            ],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaHeart
            className="text-pink-400 drop-shadow-[0_0_12px_rgba(255,77,141,0.5)]"
            style={{
              fontSize: `${heart.size}px`,
              opacity: heart.opacity,
            }}
          />
        </motion.div>
      ))}

    </div>
  );
}