import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { chapters } from "../../data/navigation";

export default function StoryNavigation() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = chapters
      .map((chapter) => document.getElementById(chapter.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.45,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav
      className="
      hidden
      lg:flex
      fixed
      left-8
      top-1/2
      -translate-y-1/2
      z-50
      flex-col
      gap-5
      "
      aria-label="Story Navigation"
    >
      {chapters.map((chapter) => {
        const isActive = active === chapter.id;

        return (
          <button
            key={chapter.id}
            onClick={() => scrollTo(chapter.id)}
            className="flex items-center gap-4 group"
          >
            <motion.div
              animate={{
                scale: isActive ? 1.3 : 1,
                backgroundColor: isActive
                  ? "#ff4d8d"
                  : "rgba(255,255,255,.25)",
              }}
              className="
              w-4
              h-4
              rounded-full
              shadow-lg
              "
            />

            <span
              className={`
              text-sm
              transition-all
              ${
                isActive
                  ? "text-pink-300"
                  : "text-white/50 group-hover:text-white"
              }
              `}
            >
              {chapter.title}
            </span>
          </button>
        );
      })}
    </nav>
  );
}