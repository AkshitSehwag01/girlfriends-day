import { motion } from "framer-motion";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className = "",
  titleId,
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 ${className}`}
    >
      {eyebrow && (
        <p className="text-pink-300/90 text-sm md:text-base tracking-[0.28em] uppercase mb-4">
          {eyebrow}
        </p>
      )}

      <h2
        id={titleId}
        className="titleFont text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-pink-100 leading-tight"
      >
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 md:mt-6 text-base md:text-lg text-pink-100/80 leading-relaxed max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.header>
  );
}
