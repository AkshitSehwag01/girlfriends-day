import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Background from "./components/common/Background";
import MusicPlayer from "./components/common/MusicPlayer";
import SmoothScroll from "./components/common/SmoothScroll";

import IntroScreen from "./components/intro/IntroScreen";
import PasswordScreen from "./components/intro/PasswordScreen";

import Hero from "./components/sections/Hero";

import Stars from "./components/effects/Stars";
import Moon from "./components/effects/Moon";
import Fireflies from "./components/effects/Fireflies";
import ShootingStar from "./components/effects/ShootingStar";

const screenTransition = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

function App() {
  const [step, setStep] = useState("intro");
  const [musicStarted, setMusicStarted] = useState(false);

  return (
    <SmoothScroll enabled={step === "hero"}>
      <Background />
      <Stars />
      <Moon />
      <Fireflies />
      <ShootingStar />

      <AnimatePresence mode="wait">
        {step === "intro" && (
          <motion.div
            key="intro"
            className="relative z-40"
            {...screenTransition}
          >
            <IntroScreen onContinue={() => setStep("password")} />
          </motion.div>
        )}

        {step === "password" && (
          <motion.div
            key="password"
            className="relative z-40"
            {...screenTransition}
          >
            <PasswordScreen
              onUnlock={() => {
                setMusicStarted(true);
                setStep("hero");
              }}
            />
          </motion.div>
        )}

        {step === "hero" && (
          <motion.div
            key="hero"
            className="relative z-10"
            {...screenTransition}
          >
            <Hero />
          </motion.div>
        )}
      </AnimatePresence>

      <MusicPlayer autoPlay={musicStarted} />
    </SmoothScroll>
  );
}

export default App;
