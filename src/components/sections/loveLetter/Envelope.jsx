import { motion } from "framer-motion";

export default function Envelope({ opened, onOpen }) {
  return (
    <motion.div
      whileHover={!opened ? { y: -8, scale: 1.02 } : {}}
      whileTap={!opened ? { scale: 0.98 } : {}}
      onClick={onOpen}
      className="relative w-[360px] h-[250px] cursor-pointer select-none"
    >
      {/* Shadow */}

      <motion.div
        animate={{
          scale: opened ? 1.1 : 1,
          opacity: opened ? 0.25 : 0.4,
        }}
        className="absolute bottom-0 left-1/2 h-6 w-72 -translate-x-1/2 rounded-full bg-black blur-xl"
      />

      {/* Letter */}

      <motion.div
        animate={{
          y: opened ? -120 : 20,
        }}
        transition={{
          duration: 0.9,
        }}
        className="
        absolute
        left-1/2
        top-10
        z-10
        h-48
        w-[280px]
        -translate-x-1/2
        rounded-xl
        bg-[#fffdf8]
        shadow-xl
        border
        border-[#ead8ba]
        "
      />

      {/* Back */}

      <div
        className="
        absolute
        bottom-0
        w-full
        h-[180px]
        rounded-xl
        bg-[#f7ead8]
        shadow-2xl
        "
      />

      {/* Left Fold */}

      <div
        className="
        absolute
        bottom-0
        left-0
        w-1/2
        h-[180px]
        bg-[#edd9bf]
        "
        style={{
          clipPath: "polygon(0 0,100% 50%,100% 100%,0 100%)",
        }}
      />

      {/* Right Fold */}

      <div
        className="
        absolute
        bottom-0
        right-0
        w-1/2
        h-[180px]
        bg-[#ecd5b6]
        "
        style={{
          clipPath: "polygon(0 50%,100% 0,100% 100%,0 100%)",
        }}
      />

      {/* Flap */}

      <motion.div
        animate={{
          rotateX: opened ? 180 : 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
        absolute
        top-0
        w-full
        h-[130px]
        origin-top
        bg-[#f1dfc5]
        z-30
        "
        style={{
          clipPath: "polygon(0 0,100% 0,50% 100%)",
        }}
      />

      {/* Seal */}

      {!opened && (
        <motion.div
          layoutId="seal"
          className="
          absolute
          left-1/2
          top-[95px]
          z-40
          flex
          h-16
          w-16
          -translate-x-1/2
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-red-500
          to-red-700
          text-2xl
          text-white
          shadow-xl
          "
        >
          ❤️
        </motion.div>
      )}

      <div className="absolute bottom-8 w-full text-center text-[#6d4b38] font-semibold z-50">
        To Siri ❤️
      </div>
    </motion.div>
  );
}