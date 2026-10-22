"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface SpecialItem {
  id: string;
  title: string;
  text: string;
  category: string;
  tag: string;
  illustration: React.ReactNode;
}

export default function SpecialThings() {
  const items: SpecialItem[] = [
    {
      id: "smile",
      title: "Your Smile",
      tag: "Pure Sunshine",
      category: "Warmth",
      text: "When you smile, every room lights up. It is the kind of smile that makes strangers feel safe and loved, and makes the people closest to you feel completely at home.",
      illustration: (
        <svg
          viewBox="0 0 72 72"
          className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Subtle sun glow */}
          <circle cx="36" cy="36" r="28" fill="url(#sunGlow)" opacity="0.4" />
          {/* Sun rays */}
          <g stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" opacity="0.85">
            <line x1="36" y1="8" x2="36" y2="14" />
            <line x1="36" y1="58" x2="36" y2="64" />
            <line x1="8" y1="36" x2="14" y2="36" />
            <line x1="58" y1="36" x2="64" y2="36" />
            <line x1="16.2" y1="16.2" x2="20.5" y2="20.5" />
            <line x1="51.5" y1="51.5" x2="55.8" y2="55.8" />
            <line x1="16.2" y1="55.8" x2="20.5" y2="51.5" />
            <line x1="51.5" y1="20.5" x2="55.8" y2="16.2" />
          </g>
          {/* Sun disk */}
          <circle cx="36" cy="36" r="18" fill="url(#sunDiskGrad)" stroke="#F59E0B" strokeWidth="1.5" />
          {/* Gentle happy eyes */}
          <path d="M29 32 Q31 29 33 32" stroke="#78350F" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M39 32 Q41 29 43 32" stroke="#78350F" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Sweet warm smile */}
          <path d="M29 37 Q36 44 43 37" stroke="#78350F" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          {/* Rosy cheeks */}
          <circle cx="27" cy="37" r="2.5" fill="#F43F5E" opacity="0.5" />
          <circle cx="45" cy="37" r="2.5" fill="#F43F5E" opacity="0.5" />

          <defs>
            <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="100%" stopColor="#FFFBEB" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="sunDiskGrad" x1="20" y1="20" x2="52" y2="52" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      id: "kindness",
      title: "Your Kindness",
      tag: "Pure Heart",
      category: "Grace",
      text: "You give without keeping score. Your kindness is rare, genuine, and absolutely breathtaking to witness.",
      illustration: (
        <svg
          viewBox="0 0 72 72"
          className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Soft aura */}
          <circle cx="36" cy="36" r="28" fill="#FCE7F3" opacity="0.6" />
          {/* Supporting open palms / gentle hands */}
          <path
            d="M18 46 C22 41, 28 41, 33 46 L36 49 L39 46 C44 41, 50 41, 54 46 C52 53, 44 57, 36 57 C28 57, 20 53, 18 46 Z"
            fill="#FBCFE8"
            stroke="#F472B6"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Glowing rose heart held gently */}
          <path
            d="M36 21 C31 15, 22 17, 22 25 C22 34, 33 40, 36 43 C39 40, 50 34, 50 25 C50 17, 41 15, 36 21 Z"
            fill="url(#kindnessHeart)"
            stroke="#E11D48"
            strokeWidth="1.5"
          />
          {/* Heart highlight */}
          <path
            d="M26 23 C26 20, 30 19, 32 21"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.8"
          />
          {/* Sparkles around heart */}
          <circle cx="20" cy="18" r="1.5" fill="#F43F5E" />
          <circle cx="52" cy="18" r="1.5" fill="#F43F5E" />
          <path d="M49 14 L50 17 L53 18 L50 19 L49 22 L48 19 L45 18 L48 17 Z" fill="#F43F5E" opacity="0.75" />

          <defs>
            <linearGradient id="kindnessHeart" x1="22" y1="17" x2="50" y2="43" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FB7185" />
              <stop offset="100%" stopColor="#E11D48" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      id: "spirit",
      title: "Your Spirit",
      tag: "Unstoppable Bloom",
      category: "Strength",
      text: "Even on the hardest days, your spirit never truly dims. You rise, you adapt, you bloom beautifully no matter the season.",
      illustration: (
        <svg
          viewBox="0 0 72 72"
          className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Soft botanical aura */}
          <circle cx="36" cy="36" r="28" fill="#FDF2F8" opacity="0.6" />
          {/* Gentle stem and leaves */}
          <path d="M36 42 Q36 54 36 62" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
          {/* Left leaf */}
          <path
            d="M36 52 Q26 48 24 53 Q31 58 36 53"
            fill="#6EE7B7"
            stroke="#059669"
            strokeWidth="1.2"
          />
          {/* Right leaf */}
          <path
            d="M36 47 Q46 43 48 48 Q41 53 36 48"
            fill="#6EE7B7"
            stroke="#059669"
            strokeWidth="1.2"
          />
          {/* Blooming flower petals */}
          {/* Back outer petals */}
          <circle cx="36" cy="22" r="10" fill="#F472B6" opacity="0.8" />
          <circle cx="26" cy="30" r="10" fill="#F472B6" opacity="0.8" />
          <circle cx="46" cy="30" r="10" fill="#F472B6" opacity="0.8" />
          <circle cx="30" cy="40" r="9" fill="#FB7185" opacity="0.85" />
          <circle cx="42" cy="40" r="9" fill="#FB7185" opacity="0.85" />
          {/* Center rosebud */}
          <ellipse cx="36" cy="32" rx="10" ry="11" fill="url(#flowerBloom)" stroke="#BE185D" strokeWidth="1.2" />
          {/* Petal swirl lines */}
          <path d="M32 29 Q36 25 40 29" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />
          <path d="M31 33 Q36 38 41 33" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />
          {/* Dewdrop highlight */}
          <circle cx="38" cy="28" r="1.5" fill="#FFFFFF" opacity="0.9" />

          <defs>
            <linearGradient id="flowerBloom" x1="26" y1="22" x2="46" y2="43" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FDA4AF" />
              <stop offset="100%" stopColor="#E11D48" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      id: "creativity",
      title: "Your Creativity",
      tag: "Vibrant Vision",
      category: "Inspiration",
      text: "You see beauty where others see ordinary. Your mind paints the world in colours most people never discover in a lifetime.",
      illustration: (
        <svg
          viewBox="0 0 72 72"
          className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Soft lavender-peach aura */}
          <circle cx="36" cy="36" r="28" fill="#FAF5FF" opacity="0.6" />
          {/* Artist's wooden palette */}
          <path
            d="M20 48 C14 38, 16 22, 28 16 C42 9, 56 16, 58 28 C60 40, 52 54, 40 56 C33 57, 29 52, 26 53 C23 54, 23 56, 20 48 Z"
            fill="url(#paletteWood)"
            stroke="#D97706"
            strokeWidth="1.5"
          />
          {/* Thumb hole */}
          <ellipse cx="28" cy="46" rx="4" ry="5" fill="#FFF0F4" stroke="#B45309" strokeWidth="1.2" />
          {/* Color paint swatches on palette */}
          <circle cx="28" cy="23" r="3.5" fill="#F43F5E" />
          <circle cx="38" cy="19" r="3.5" fill="#FBBF24" />
          <circle cx="48" cy="24" r="3.5" fill="#38BDF8" />
          <circle cx="51" cy="35" r="3.5" fill="#A855F7" />
          <circle cx="44" cy="45" r="3.5" fill="#34D399" />
          {/* Paintbrush angled across */}
          <g transform="rotate(-30 42 36)">
            {/* Brush handle */}
            <rect x="39" y="10" width="3.5" height="42" rx="1.5" fill="#78350F" />
            {/* Metal ferrule */}
            <rect x="38.5" y="44" width="4.5" height="8" rx="0.5" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="0.8" />
            {/* Bristles */}
            <path d="M38.5 52 C38.5 58, 43 58, 43 52 Z" fill="#F43F5E" />
          </g>

          <defs>
            <linearGradient id="paletteWood" x1="16" y1="14" x2="58" y2="56" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FEF3C7" />
              <stop offset="100%" stopColor="#FDE68A" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF0F4] via-[#FFF7FA] to-[#FFF0F4] border-t border-[#F5CAD8]/70 overflow-hidden">
      {/* Decorative background embellishments */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FFE5EC]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#F5CAD8] text-[#F0447E] text-xs font-serif tracking-wider uppercase mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F0447E]" />
            <span>Honoring What Makes You Glow</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#49303A] font-normal tracking-tight mb-4"
          >
            The Little Things That Make You Special
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#896F7A] font-serif italic"
          >
            Four beautiful things that make you, you.
          </motion.p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className={`group relative rounded-3xl p-7 sm:p-9 bg-[#FFFFFF] border border-[#F5CAD8] shadow-soft-card hover:shadow-photo-hover transition-all duration-300 flex flex-col justify-between ${
                idx === 1
                  ? "md:translate-y-6"
                  : idx === 2
                  ? "md:-translate-y-2"
                  : ""
              }`}
            >
              {/* Delicate top corner ribbon/tag */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-[#FFF0F4] border border-[#F5CAD8] text-[11px] font-serif tracking-wider uppercase text-[#D92F68] font-medium">
                  {item.tag}
                </span>
                <span className="text-xs font-serif italic text-[#896F7A]/80">
                  0{idx + 1}
                </span>
              </div>

              {/* Main content: Illustration + Title + Story text */}
              <div>
                <div className="mb-5 flex items-center justify-start">
                  <div className="p-2.5 rounded-2xl bg-[#FFF7FA] border border-[#F5CAD8]/80 group-hover:scale-105 transition-transform duration-300">
                    {item.illustration}
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-[#49303A] font-medium mb-3 group-hover:text-[#F0447E] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-[#896F7A] font-serif leading-relaxed">
                  {item.text}
                </p>
              </div>

              {/* Subtle bottom decorative accent */}
              <div className="mt-6 pt-4 border-t border-[#F5CAD8]/40 flex items-center justify-between text-xs text-[#896F7A]/60 font-serif italic">
                <span>Always admired</span>
                <span className="text-[#F0447E] text-sm">✦</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
