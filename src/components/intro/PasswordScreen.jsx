import { useState } from "react";
import { motion } from "framer-motion";

import PrimaryButton from "../common/PrimaryButton";
import { siteData } from "../../data/siteData";

export default function PasswordScreen({ onUnlock }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const checkPassword = () => {
    if (password === siteData.password) {
      onUnlock();
    } else {
      setError("Only Siri knows the correct answer ❤️");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">

      <motion.div
        initial={{ scale: .9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white/30 backdrop-blur-xl rounded-3xl p-10 shadow-2xl max-w-md w-full text-center"
      >
        <h1 className="text-4xl font-bold text-pink-700">
          Unlock Our Story ❤️
        </h1>

        <p className="mt-5 text-gray-700">
          Enter our special date
        </p>

        <input
          type="password"
          placeholder="30052026"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-8 w-full rounded-xl border border-pink-300 p-4 outline-none text-center text-xl"
        />

        {error && (
          <p className="mt-4 text-red-600">
            {error}
          </p>
        )}

        <div className="mt-8">
          <PrimaryButton onClick={checkPassword}>
            Unlock ❤️
          </PrimaryButton>
        </div>
      </motion.div>

    </div>
  );
}