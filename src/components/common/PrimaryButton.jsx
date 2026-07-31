import { motion } from "framer-motion";

const variants = {
  primary: `
    bg-[var(--primary)] text-white
    shadow-[var(--shadow-glow)]
    hover:bg-[var(--primary-deep)]
  `,
  soft: `
    bg-white/15 text-white
    border border-white/25
    shadow-[var(--shadow-soft)]
    hover:bg-white/25
  `,
  ghost: `
    bg-transparent text-pink-100
    border border-pink-200/40
    hover:bg-white/10 hover:border-pink-100/60
  `,
};

export default function PrimaryButton({
  children,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  className = "",
  "aria-label": ariaLabel,
}) {
  const variantClass = variants[variant] || variants.primary;

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      whileHover={disabled ? undefined : { scale: 1.04 }}
      whileTap={disabled ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={`
        inline-flex items-center justify-center
        rounded-[var(--radius-full)]
        px-8 sm:px-10 py-3.5 sm:py-4
        text-base sm:text-lg font-semibold
        transition-colors duration-[var(--duration-base)]
        disabled:opacity-50 disabled:cursor-not-allowed
        focus-visible:outline focus-visible:outline-2
        focus-visible:outline-offset-4 focus-visible:outline-pink-200
        ${variantClass}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}
