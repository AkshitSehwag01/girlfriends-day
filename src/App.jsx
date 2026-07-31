import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Background from "./components/common/Background";
import MusicPlayer from "./components/common/MusicPlayer";

import IntroScreen from "./components/intro/IntroScreen";
import PasswordScreen from "./components/intro/PasswordScreen";

import Hero from "./components/sections/Hero";

import Stars from "./components/effects/Stars";
import Moon from "./components/effects/Moon";
import Fireflies from "./components/effects/Fireflies";
import ShootingStar from "./components/effects/ShootingStar";

const screenTransition = {
  initial: { opacity: 0, filter: "blur(8px)" },
  animate: { opacity: 1, filter: "blur(0px)" },
  exit: { opacity: 0, filter: "blur(8px)" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

function App() {
  const [step, setStep] = useState("intro");
  const [musicStarted, setMusicStarted] = useState(false);

  return (
    <>
      <Background />
      <Stars />
      <Moon />
      <Fireflies />
      <ShootingStar />

      <AnimatePresence mode="wait">
        {step === "intro" && (
          <motion.div key="intro" {...screenTransition}>
            <IntroScreen onContinue={() => setStep("password")} />
          </motion.div>
        )}

        {step === "password" && (
          <motion.div key="password" {...screenTransition}>
            <PasswordScreen
              onUnlock={() => {
                setMusicStarted(true);
                setStep("hero");
              }}
            />
          </motion.div>
        )}

        {step === "hero" && (
          <motion.div key="hero" {...screenTransition}>
            <Hero />
          </motion.div>
        )}
      </AnimatePresence>

      <MusicPlayer autoPlay={musicStarted} />
    </>
  );
}

export default App;
