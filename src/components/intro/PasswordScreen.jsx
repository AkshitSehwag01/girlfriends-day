import { useId, useState } from "react";
import { motion } from "framer-motion";

import PrimaryButton from "../common/PrimaryButton";
import { siteData } from "../../data/siteData";

export default function PasswordScreen({ onUnlock }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const inputId = useId();
  const errorId = useId();

  const checkPassword = (event) => {
    event?.preventDefault();

    if (password === siteData.relationship.password) {
      setError("");
      onUnlock();
      return;
    }

    setError("Only Siri knows the correct answer");
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center px-[var(--section-pad-x)]">
      <motion.form
        onSubmit={checkPassword}
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="glass-strong rounded-[28px] md:rounded-[36px] p-8 sm:p-10 md:p-12 shadow-2xl max-w-md w-full text-center"
        aria-labelledby="password-heading"
      >
        <h1
          id="password-heading"
          className="titleFont text-4xl sm:text-5xl text-pink-100"
        >
          Unlock Our Story
        </h1>

        <p className="mt-4 text-pink-100/80 text-base sm:text-lg">
          Enter our special date
        </p>

        <label htmlFor={inputId} className="sr-only">
          Relationship password
        </label>

        <input
          id={inputId}
          type="password"
          inputMode="numeric"
          autoComplete="off"
          placeholder="DDMMYYYY"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (error) setError("");
          }}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className="
            mt-8 w-full rounded-2xl
            border border-white/20 bg-white/10
            px-4 py-4 outline-none
            text-center text-xl text-white
            placeholder:text-pink-200/40
            backdrop-blur-md
            focus:border-pink-300/60 focus:bg-white/15
            transition-colors duration-300
          "
        />

        {error && (
          <p
            id={errorId}
            role="alert"
            className="mt-4 text-rose-300 text-sm sm:text-base"
          >
            {error}
          </p>
        )}

        <div className="mt-8">
          <PrimaryButton type="submit" aria-label="Unlock our story">
            Unlock
          </PrimaryButton>
        </div>
      </motion.form>
    </div>
  );
}
