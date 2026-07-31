import { useState } from "react";

import Background from "./components/common/Background";

import IntroScreen from "./components/intro/IntroScreen";
import PasswordScreen from "./components/intro/PasswordScreen";

import Hero from "./components/sections/Hero";

import Stars from "./components/effects/Stars";
import Moon from "./components/effects/Moon";
import Fireflies from "./components/effects/Fireflies";
import ShootingStar from "./components/effects/ShootingStar";

import MusicPlayer from "./components/common/MusicPlayer";

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

      {step === "intro" && (
        <IntroScreen
          onContinue={() => setStep("password")}
        />
      )}

      {step === "password" && (
        <PasswordScreen
        onUnlock={() => {
          setMusicStarted(true);
          setStep("hero");
        }}
        />
      )}

      {step === "hero" && <Hero />}

      <MusicPlayer autoPlay={musicStarted} />

    </>
  );
}

export default App;