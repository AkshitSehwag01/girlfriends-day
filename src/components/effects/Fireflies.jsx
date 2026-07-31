import { motion } from "framer-motion";

export default function Fireflies() {
  const lights = Array.from({ length: 18 });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {lights.map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute w-2 h-2 rounded-full bg-yellow-300 shadow-[0_0_20px_#fde047]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}