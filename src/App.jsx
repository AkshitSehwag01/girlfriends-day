import { useState } from "react";

import Background from "./components/common/Background";
import IntroScreen from "./components/intro/IntroScreen";
import PasswordScreen from "./components/intro/PasswordScreen";
import Hero from "./components/sections/Hero";
import Stars from "./components/effects/Stars";

function App() {
  const [step, setStep] = useState("intro");

  return (
    <>
      <Background />
      <Stars />

      {step === "intro" && (
        <IntroScreen
          onContinue={() => setStep("password")}
        />
      )}

      {step === "password" && (
        <PasswordScreen
          onUnlock={() => setStep("hero")}
        />
      )}

      {step === "hero" && <Hero />}
    </>
  );
}

export default App;