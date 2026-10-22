"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, Heart } from "lucide-react";
import { birthdayConfig } from "@/config/birthday";
import { playBirthdayMusic } from "@/lib/audio";

interface PasswordGateProps {
  onUnlock: () => void;
}

export default function PasswordGate({ onUnlock }: PasswordGateProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (isSubmitting || isUnlocked) return;

    setError(null);

    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();

    if (!cleanEmail || !cleanPassword) {
      setError("Please fill in both your email and the secret code. 🌸");
      return;
    }

    setIsSubmitting(true);

    const targetEmail = birthdayConfig.credentials.expectedEmail.trim().toLowerCase();
    const targetPassword = birthdayConfig.credentials.expectedPassword.trim();

    if (cleanEmail === targetEmail && cleanPassword === targetPassword) {
      // Trigger background music directly within this user interaction context
      playBirthdayMusic();

      setIsUnlocked(true);
      setTimeout(() => {
        onUnlock();
      }, 900);
    } else {
      setTimeout(() => {
        setIsSubmitting(false);
        setError("Not quite! Try another little guess. 💗");
      }, 250);
    }
  };

  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center px-4 py-12 overflow-hidden bg-[#FFF0F4]">
      {/* Soft romantic background accents */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#FFE5EC] blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#FFF7F8] blur-3xl pointer-events-none" />

      {/* Warm celebration transition overlay */}
      <AnimatePresence>
        {isUnlocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 bg-[#FFE5EC]/95 z-30 pointer-events-none flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center font-serif text-3xl sm:text-4xl text-[#472D37]"
            >
              Welcome, Pillyaaaa💞... 🌸
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Invitation Card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{
          opacity: isUnlocked ? 0 : 1,
          y: isUnlocked ? -12 : 0,
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 w-full max-w-md mx-auto"
      >
        <div className="bg-[#FFFFFF] border border-[#F3CAD7] rounded-3xl p-7 sm:p-10 shadow-soft-card relative">
          {/* Decorative small heart at top */}
          <div className="flex justify-center mb-4">
            <span className="w-10 h-10 rounded-full bg-[#FFF0F4] border border-[#F3CAD7] flex items-center justify-center text-[#F0447E] shadow-sm">
              <Heart className="w-5 h-5 fill-[#F0447E]" />
            </span>
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-serif text-[#472D37] tracking-tight leading-snug">
              Someone made something special for you...
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-[#806874] font-sans leading-relaxed">
              Before you step inside, there&apos;s just one little secret to uncover.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label
                htmlFor="gate-email"
                className="block text-xs font-serif tracking-wider text-[#472D37] uppercase font-semibold mb-1.5"
              >
                Your email
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#F7B6CA]">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="gate-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="Enter your email address"
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-[#FFF7F8] border border-[#F3CAD7] rounded-xl text-sm sm:text-base text-[#472D37] placeholder-[#A58F9B] focus:outline-none focus:border-[#F0447E] focus:ring-2 focus:ring-[#F7B6CA]/40 transition"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="gate-password"
                className="block text-xs font-serif tracking-wider text-[#472D37] uppercase font-semibold mb-1.5"
              >
                The secret
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#F7B6CA]">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  id="gate-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="Can you guess it?"
                  className="w-full pl-10 pr-11 py-2.5 sm:py-3 bg-[#FFF7F8] border border-[#F3CAD7] rounded-xl text-sm sm:text-base text-[#472D37] placeholder-[#A58F9B] focus:outline-none focus:border-[#F0447E] focus:ring-2 focus:ring-[#F7B6CA]/40 transition"
                  required
                />
                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#806874] hover:text-[#472D37] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Inline Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="p-2.5 rounded-xl bg-[#FFE5EC] border border-[#F3CAD7] text-xs text-[#D92F68] text-center flex items-center justify-center gap-2"
                >
                  <Heart className="w-3.5 h-3.5 fill-[#F0447E] text-[#F0447E] shrink-0" />
                  <span>{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || isUnlocked}
              className="w-full mt-2 py-3 px-6 rounded-xl font-serif text-sm tracking-wider uppercase bg-[#F0447E] hover:bg-[#D92F68] text-white shadow-photo-clean hover:shadow-photo-hover transition-all active:scale-[0.99] disabled:opacity-75 cursor-pointer font-medium"
            >
              {isSubmitting ? "Unlocking..." : "Unlock Your Surprise ✨"}
            </button>
          </form>

          {/* Hint Footer */}
          <div className="mt-6 text-center">
            <p className="text-xs text-[#806874] font-serif italic">
              The answer might be closer to you than you think.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
