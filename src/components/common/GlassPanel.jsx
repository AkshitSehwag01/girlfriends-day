import { motion } from "framer-motion";

const defaultMotion = {
  initial: { opacity: 0, y: 48 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
};

export default function GlassPanel({
  children,
  className = "",
  strong = false,
  motionProps,
  ...props
}) {
  const glassClass = strong ? "glass-strong" : "glass";
  const baseClass = `relative w-full rounded-[28px] md:rounded-[36px] p-8 sm:p-10 md:p-12 ${glassClass} ${className}`;

  const resolvedMotion = motionProps === false
    ? {}
    : { ...defaultMotion, ...(motionProps || {}) };

  return (
    <motion.div className={baseClass} {...resolvedMotion} {...props}>
      {children}
    </motion.div>
  );
}
