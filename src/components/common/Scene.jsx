import { motion } from "framer-motion";

export default function Scene({
  children,
  id,
  className = "",
  as: Component = motion.section,
  centered = true,
  ...props
}) {
  return (
    <Component
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`section-shell ${className}`}
      {...props}
    >
      <div
        className={`
          relative
          z-10
          w-full
          max-w-[var(--content-max)]
          mx-auto
          ${centered ? "text-center" : ""}
        `}
      >
        {children}
      </div>
    </Component>
  );
}