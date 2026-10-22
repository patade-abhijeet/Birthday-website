"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Sparkles, RotateCcw } from "lucide-react";

export default function BirthdayCake() {
  const [isBlown, setIsBlown] = useState(false);

  const handleTapCake = useCallback(() => {
    if (isBlown) return;
    setIsBlown(true);

    // Trigger romantic confetti burst with hearts & stars
    try {
      const scalar = 1.8;
      const loveHeart = confetti.shapeFromPath({
        path: "M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -75,-76 -151,-151 -151,-227 0,-42 33,-75 75,-75 38,0 57,18 76,56z",
      });

      confetti({
        shapes: [loveHeart],
        scalar,
        particleCount: 30,
        spread: 60,
        origin: { y: 0.62 },
        colors: ["#F0447E", "#F7B6CA", "#D92F68", "#FDE047", "#FFFFFF"],
        ticks: 220,
        gravity: 0.7,
      });

      // Extra festive pop
      setTimeout(() => {
        confetti({
          particleCount: 20,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#F0447E", "#FDE047", "#FFE5EC"],
          ticks: 180,
        });
      }, 150);
    } catch {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.62 },
        colors: ["#F0447E", "#F7B6CA", "#FDE047"],
      });
    }
  }, [isBlown]);

  const handleRelight = () => {
    setIsBlown(false);
  };

  const candleData = [
    { id: 1, x: 104, stripeColor: "#F472B6", label: "pink" },
    { id: 2, x: 126, stripeColor: "#38BDF8", label: "blue" },
    { id: 3, x: 148, stripeColor: "#A78BFA", label: "purple" },
    { id: 4, x: 170, stripeColor: "#34D399", label: "green" },
  ];

  return (
    <section
      id="birthday-cake-section"
      className="relative py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-[#FFF7FA] via-[#FFF0F4] to-[#FFF7FA] text-center border-y border-[#F5CAD8]/70 overflow-hidden"
    >
      {/* Soft romantic background aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFE5EC]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-xl mx-auto">
        {/* Section Tag */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#F5CAD8] text-[#F0447E] text-xs font-serif tracking-wider uppercase mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#F0447E]" />
          <span>A Birthday Tradition</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#49303A] font-normal tracking-tight mb-2">
          Make a Birthday Wish
        </h2>
        <p className="text-sm sm:text-base text-[#896F7A] font-serif italic mb-8">
          Close your eyes, think of what makes you happiest, and blow the candles.
        </p>

        {/* CUTE GLOSSY THREE-TIER BIRTHDAY CAKE */}
        <div
          role="button"
          tabIndex={0}
          onClick={handleTapCake}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleTapCake();
            }
          }}
          aria-label={
            isBlown
              ? "Birthday cake with candles blown out. Tap to make another wish."
              : "Birthday cake with lit candles. Tap to blow out the candles."
          }
          className={`relative mx-auto w-[280px] sm:w-[320px] h-[320px] sm:h-[350px] flex items-center justify-center cursor-pointer select-none transition-transform duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#F0447E]/40 rounded-3xl ${
            !isBlown ? "hover:scale-[1.03] active:scale-95" : ""
          }`}
        >
          <svg
            viewBox="0 0 280 320"
            className="w-full h-full drop-shadow-xl overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Stand / Plate Gradients */}
              <linearGradient id="plateGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#FFF7FA" />
                <stop offset="100%" stopColor="#F5CAD8" />
              </linearGradient>

              {/* Bottom Tier: Broad Rounded Pink */}
              <linearGradient id="bottomTierGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFA6C1" />
                <stop offset="25%" stopColor="#FFC2D4" />
                <stop offset="70%" stopColor="#F4729A" />
                <stop offset="100%" stopColor="#E11D48" />
              </linearGradient>

              {/* Middle Tier: Vibrant Bright Pink */}
              <linearGradient id="middleTierGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F43F5E" />
                <stop offset="30%" stopColor="#FB7185" />
                <stop offset="75%" stopColor="#E11D48" />
                <stop offset="100%" stopColor="#BE123C" />
              </linearGradient>

              {/* Top Tier: Compact Pastel Yellow */}
              <linearGradient id="topTierGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FDE047" />
                <stop offset="30%" stopColor="#FEF08A" />
                <stop offset="75%" stopColor="#FACC15" />
                <stop offset="100%" stopColor="#EAB308" />
              </linearGradient>

              {/* Top Strawberry Frosting Drip */}
              <linearGradient id="strawberryIcingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FB7185" />
                <stop offset="50%" stopColor="#F43F5E" />
                <stop offset="100%" stopColor="#E11D48" />
              </linearGradient>

              {/* Flame Radial Glow */}
              <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFBEB" />
                <stop offset="30%" stopColor="#FDE047" />
                <stop offset="70%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Surrounding Celebratory Details (Floating stars & sparkles) */}
            <g className="celebratory-sparkles" opacity={isBlown ? 0.3 : 0.85}>
              {/* Top left sparkle */}
              <path
                d="M35 80 L37 86 L43 88 L37 90 L35 96 L33 90 L27 88 L33 86 Z"
                fill="#FDE047"
              />
              <circle cx="55" cy="65" r="2.5" fill="#F472B6" />
              {/* Top right sparkle */}
              <path
                d="M245 85 L247 91 L253 93 L247 95 L245 101 L243 95 L237 93 L243 91 Z"
                fill="#FDE047"
              />
              <circle cx="225" cy="70" r="2" fill="#F472B6" />
              {/* Floating mini hearts */}
              <path
                d="M25 150 C22 146, 17 147, 17 152 C17 157, 25 162, 25 162 C25 162, 33 157, 33 152 C33 147, 28 146, 25 150 Z"
                fill="#FB7185"
                opacity="0.75"
              />
              <path
                d="M252 165 C249 161, 244 162, 244 167 C244 172, 252 177, 252 177 C252 177, 260 172, 260 167 C260 162, 255 161, 252 165 Z"
                fill="#FB7185"
                opacity="0.75"
              />
            </g>

            {/* CAKE STAND / PEDESTAL */}
            {/* Stand shadow */}
            <ellipse cx="140" cy="305" rx="125" ry="12" fill="rgba(73, 48, 58, 0.08)" />
            {/* Base plate */}
            <ellipse cx="140" cy="298" rx="120" ry="14" fill="url(#plateGrad)" stroke="#F5CAD8" strokeWidth="2" />
            <ellipse cx="140" cy="294" rx="114" ry="11" fill="#FFFFFF" />

            {/* ========================================================
                TIER 1: BROAD ROUNDED PINK BOTTOM TIER
                ======================================================== */}
            {/* Cylinder body with rounded bottom */}
            <path
              d="M32 235 L32 270 C32 288, 248 288, 248 270 L248 235 Z"
              fill="url(#bottomTierGrad)"
            />
            {/* Bottom tier top rim ellipse */}
            <ellipse cx="140" cy="235" rx="108" ry="18" fill="#FFB3C7" stroke="#F5CAD8" strokeWidth="1.5" />

            {/* Glossy 3D Highlight curve on left side of bottom tier */}
            <path
              d="M50 240 Q46 255 52 272"
              stroke="#FFFFFF"
              strokeWidth="5"
              strokeLinecap="round"
              opacity="0.5"
            />
            <path
              d="M62 242 Q58 255 64 270"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.4"
            />

            {/* Scalloped White Cream Drips across Bottom Tier */}
            <path
              d="M32 235 
                 C40 250, 52 250, 60 238
                 C68 255, 82 255, 92 238
                 C102 258, 118 258, 128 238
                 C138 260, 154 260, 164 238
                 C174 256, 188 256, 198 238
                 C208 252, 220 252, 228 238
                 C236 248, 244 246, 248 235
                 Z"
              fill="#FFFFFF"
              stroke="#FFF0F4"
              strokeWidth="1"
            />

            {/* Decorative Sugar Pearls / Sprinkles on Bottom Tier */}
            <g className="bottom-tier-sprinkles">
              <circle cx="58" cy="265" r="3" fill="#FFFFFF" />
              <circle cx="85" cy="272" r="3.5" fill="#FDE047" />
              <circle cx="115" cy="268" r="3" fill="#FFFFFF" />
              <circle cx="140" cy="274" r="3.5" fill="#BE123C" />
              <circle cx="168" cy="268" r="3" fill="#FFFFFF" />
              <circle cx="195" cy="272" r="3.5" fill="#FDE047" />
              <circle cx="222" cy="265" r="3" fill="#FFFFFF" />
            </g>

            {/* ========================================================
                TIER 2: SMALLER VIBRANT BRIGHT PINK MIDDLE TIER
                ======================================================== */}
            {/* Cylinder body */}
            <path
              d="M62 165 L62 205 C62 220, 218 220, 218 205 L218 165 Z"
              fill="url(#middleTierGrad)"
            />
            {/* Middle tier top rim ellipse */}
            <ellipse cx="140" cy="165" rx="78" ry="14" fill="#FB7185" stroke="#F43F5E" strokeWidth="1.2" />

            {/* 3D Glossy curved highlight on Middle Tier */}
            <path
              d="M76 170 Q73 186 78 202"
              stroke="#FFFFFF"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.55"
            />
            <path
              d="M85 172 Q82 186 87 200"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.4"
            />

            {/* Scalloped Cream Frosting Drips on Middle Tier */}
            <path
              d="M62 165
                 C70 178, 80 178, 88 167
                 C96 184, 110 184, 118 167
                 C126 186, 142 186, 150 167
                 C158 183, 172 183, 180 167
                 C188 178, 198 178, 206 167
                 C212 174, 216 172, 218 165
                 Z"
              fill="#FFFFFF"
              stroke="#FFF0F4"
              strokeWidth="1"
            />

            {/* Decorative Pearls & Hearts on Middle Tier */}
            <g className="middle-tier-decorations">
              <circle cx="95" cy="198" r="2.8" fill="#FFFFFF" />
              <circle cx="125" cy="202" r="3" fill="#FDE047" />
              <circle cx="155" cy="202" r="3" fill="#FFFFFF" />
              <circle cx="185" cy="198" r="2.8" fill="#FDE047" />
            </g>

            {/* ========================================================
                TIER 3: COMPACT PASTEL YELLOW TOP TIER
                ======================================================== */}
            {/* Cylinder body */}
            <path
              d="M90 108 L90 142 C90 154, 190 154, 190 142 L190 108 Z"
              fill="url(#topTierGrad)"
            />
            {/* Top tier top rim ellipse */}
            <ellipse cx="140" cy="108" rx="50" ry="11" fill="#FEF08A" stroke="#FACC15" strokeWidth="1" />

            {/* 3D Glossy curved highlight on Top Tier */}
            <path
              d="M100 112 Q98 124 102 136"
              stroke="#FFFFFF"
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.6"
            />

            {/* Rich Strawberry/Raspberry Icing Drips spilling from Top Tier */}
            <path
              d="M90 108
                 C96 120, 104 120, 110 110
                 C116 125, 126 125, 132 110
                 C138 128, 150 128, 156 110
                 C162 124, 172 124, 178 110
                 C184 118, 188 116, 190 108
                 Z"
              fill="url(#strawberryIcingGrad)"
            />
            {/* Glossy drops on the strawberry icing */}
            <circle cx="121" cy="120" r="1.5" fill="#FFFFFF" opacity="0.8" />
            <circle cx="144" cy="123" r="1.8" fill="#FFFFFF" opacity="0.8" />

            {/* Cream rosettes / cherries on top surface */}
            <circle cx="106" cy="107" r="4" fill="#FFFFFF" stroke="#F5CAD8" strokeWidth="1" />
            <circle cx="128" cy="105" r="4.5" fill="#FFFFFF" stroke="#F5CAD8" strokeWidth="1" />
            <circle cx="152" cy="105" r="4.5" fill="#FFFFFF" stroke="#F5CAD8" strokeWidth="1" />
            <circle cx="174" cy="107" r="4" fill="#FFFFFF" stroke="#F5CAD8" strokeWidth="1" />

            {/* ========================================================
                FOUR COLORFUL BIRTHDAY CANDLES WITH VISIBLE FLAMES
                ======================================================== */}
            {candleData.map((candle, idx) => (
              <g key={candle.id} className="candle-group">
                {/* Candle body */}
                <rect
                  x={candle.x - 3.5}
                  y="66"
                  width="7"
                  height="38"
                  rx="2"
                  fill="#FFFFFF"
                  stroke="#E2E8F0"
                  strokeWidth="0.8"
                />
                {/* Diagonal stripes on candle */}
                <g clipPath={`url(#candleClip-${candle.id})`}>
                  <defs>
                    <clipPath id={`candleClip-${candle.id}`}>
                      <rect x={candle.x - 3.5} y="66" width="7" height="38" rx="2" />
                    </clipPath>
                  </defs>
                  <line
                    x1={candle.x - 6}
                    y1="72"
                    x2={candle.x + 6}
                    y2="78"
                    stroke={candle.stripeColor}
                    strokeWidth="3.2"
                  />
                  <line
                    x1={candle.x - 6}
                    y1="82"
                    x2={candle.x + 6}
                    y2="88"
                    stroke={candle.stripeColor}
                    strokeWidth="3.2"
                  />
                  <line
                    x1={candle.x - 6}
                    y1="92"
                    x2={candle.x + 6}
                    y2="98"
                    stroke={candle.stripeColor}
                    strokeWidth="3.2"
                  />
                </g>

                {/* Candle wick */}
                <path
                  d={`M${candle.x} 66 Q${candle.x + 1} 61 ${candle.x} 58`}
                  stroke="#49303A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />

                {/* CANDLE FLAME (When Lit) or SMOKE PUFF (When Blown) */}
                {!isBlown ? (
                  <g className="candle-flame">
                    {/* Flame outer glow */}
                    <ellipse
                      cx={candle.x}
                      cy="48"
                      rx="9"
                      ry="12"
                      fill="url(#flameGlow)"
                      className="animate-pulse"
                      style={{ animationDuration: `${1 + idx * 0.25}s` }}
                    />
                    {/* Flame outer teardrop */}
                    <path
                      d={`M${candle.x} 38 
                         C${candle.x + 4.5} 44, ${candle.x + 4.5} 53, ${candle.x} 56 
                         C${candle.x - 4.5} 53, ${candle.x - 4.5} 44, ${candle.x} 38 Z`}
                      fill="#F59E0B"
                    />
                    {/* Flame golden core */}
                    <path
                      d={`M${candle.x} 42 
                         C${candle.x + 2.8} 46, ${candle.x + 2.8} 52, ${candle.x} 54 
                         C${candle.x - 2.8} 52, ${candle.x - 2.8} 46, ${candle.x} 42 Z`}
                      fill="#FDE047"
                    />
                    {/* Flame white-hot center */}
                    <ellipse cx={candle.x} cy="50" rx="1.5" ry="3.5" fill="#FFFFFF" />
                  </g>
                ) : (
                  /* Gentle smoke puff rising when blown */
                  <g className="smoke-puff">
                    <circle cx={candle.x - 1} cy="52" r="2.5" fill="#94A3B8" opacity="0.4" />
                    <circle cx={candle.x + 1} cy="46" r="3.5" fill="#CBD5E1" opacity="0.3" />
                    <circle cx={candle.x - 1} cy="40" r="4.5" fill="#E2E8F0" opacity="0.2" />
                  </g>
                )}
              </g>
            ))}
          </svg>
        </div>

        {/* INSTRUCTION DIRECTLY BELOW THE CAKE */}
        <p className="text-sm sm:text-base font-serif italic text-[#896F7A] mt-3 mb-6">
          {!isBlown ? (
            <span>Make a wish and tap the cake to blow out the candles.</span>
          ) : (
            <span className="text-[#F0447E] font-medium">
              Your birthday wish has been set free! ✨
            </span>
          )}
        </p>

        {/* ACTION BUTTON & REVEALED WISH */}
        <div>
          {!isBlown ? (
            <button
              onClick={handleTapCake}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#F0447E] hover:bg-[#D92F68] text-white font-serif text-sm tracking-wider uppercase shadow-photo-clean hover:shadow-photo-hover transition-all active:scale-95 cursor-pointer font-medium"
            >
              <span>Make a Birthday Wish 🎂</span>
            </button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              {/* Heartfelt Revealed Wish Note */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#FFFFFF] border border-[#F5CAD8] shadow-soft-card max-w-md mx-auto text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFF0F4] rounded-bl-full pointer-events-none -mr-6 -mt-6" />

                <div className="flex items-center gap-2 mb-3 text-[#F0447E]">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-serif tracking-wider uppercase font-semibold">
                    A Wish For Your New Year
                  </span>
                </div>

                <p className="font-handwriting text-2xl sm:text-3xl text-[#49303A] mb-2 leading-snug">
                  &ldquo;May all your quiet wishes come true, Pillyaaaa💞.&rdquo;
                </p>

                <p className="text-sm sm:text-base text-[#896F7A] font-serif leading-relaxed mb-4">
                  Here&apos;s to a year overflowing with peace, unexpected laughter, and the kind of love that stays forever. You deserve every ounce of joy this universe can give. 💕
                </p>

                <div className="pt-3 border-t border-[#F5CAD8]/50 flex items-center justify-between text-xs text-[#896F7A]/80 font-serif italic">
                  <span>Forever celebrating you</span>
                  <span className="text-[#F0447E] font-serif font-bold">❤️</span>
                </div>
              </div>

              {/* Button to relight candles */}
              <div>
                <button
                  onClick={handleRelight}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFFFFF] hover:bg-[#FFF0F4] border border-[#F5CAD8] text-xs sm:text-sm font-serif text-[#896F7A] hover:text-[#49303A] transition-all shadow-sm active:scale-95 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-[#F0447E]" />
                  <span>Light the candles again 🕯️</span>
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
