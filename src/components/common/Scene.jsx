import { motion } from "framer-motion";

export default function Scene({
  children,
  className = "",
}) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1,
      }}
      className={`min-h-screen flex items-center justify-center px-6 relative ${className}`}
    >
      {children}
    </motion.section>
  );
}