import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
import Lenis from "lenis";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";

const SmoothScrollContext = createContext({
  scrollTo: (target, options) => {
    const element =
      typeof target === "string"
        ? document.querySelector(target)
        : target;

    element?.scrollIntoView({
      behavior: options?.immediate ? "auto" : "smooth",
      block: "start",
    });
  },
  lenis: null,
});

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

export default function SmoothScroll({ children, enabled = true }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const lenisRef = useRef(null);
  const shouldSmooth = enabled && !prefersReducedMotion;

  useEffect(() => {
    if (!shouldSmooth) return undefined;

    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      duration: 1.05,
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.4,
      wheelMultiplier: 0.95,
    });

    lenisRef.current = lenis;
    document.documentElement.classList.add("lenis");

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      document.documentElement.classList.remove("lenis", "lenis-smooth");
    };
  }, [shouldSmooth]);

  const scrollTo = useCallback((target, options = {}) => {
    const {
      offset = 0,
      immediate = false,
      duration,
      onComplete,
    } = options;

    const resolveElement = () => {
      if (typeof target === "string") {
        if (target.startsWith("#")) {
          return document.getElementById(target.slice(1));
        }
        return document.querySelector(target);
      }
      return target ?? null;
    };

    const element = resolveElement();
    const lenis = lenisRef.current;

    if (lenis && shouldSmooth) {
      lenis.scrollTo(element ?? target, {
        offset,
        immediate,
        duration,
        onComplete,
      });
      return;
    }

    if (element) {
      element.scrollIntoView({
        behavior: immediate || prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
      onComplete?.();
    }
  }, [prefersReducedMotion, shouldSmooth]);

  const value = useMemo(
    () => ({
      scrollTo,
      lenis: lenisRef.current,
    }),
    [scrollTo]
  );

  return (
    <SmoothScrollContext.Provider value={value}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
