"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PasswordGate from "@/components/PasswordGate";
import BirthdayExperience from "@/components/BirthdayExperience";
import { playBirthdayMusic } from "@/lib/audio";

export default function Home() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    try {
      const saved = sessionStorage.getItem("snehal_birthday_unlocked");
      if (saved === "true") {
        setIsUnlocked(true);
        // Attempt playback on first interaction if refreshed while already unlocked
        playBirthdayMusic();
      }
    } catch {
      // Ignore if sessionStorage is restricted
    }
  }, []);

  const handleUnlock = () => {
    try {
      sessionStorage.setItem("snehal_birthday_unlocked", "true");
    } catch {
      // Ignore if sessionStorage is restricted
    }
    playBirthdayMusic();
    setIsUnlocked(true);
  };

  if (!isClient) {
    return (
      <div className="min-h-screen bg-[#FFF0F4] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[#F3CAD7] border-t-[#F0447E] rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#FFF0F4] text-[#472D37]">
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <motion.div
            key="gate"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PasswordGate onUnlock={handleUnlock} />
          </motion.div>
        ) : (
          <motion.div
            key="experience"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <BirthdayExperience />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
