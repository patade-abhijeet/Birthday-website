"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Heart } from "lucide-react";
import { birthdayConfig } from "@/config/birthday";

interface BirthdayHeroProps {
  onScrollNext: () => void;
}

export default function BirthdayHero({ onScrollNext }: BirthdayHeroProps) {
  const heroPhoto = birthdayConfig.gallery.memories[0] || {
    src: "/images/couple/IMG20260709092606.jpg.jpeg",
    caption: "Golden hour memories with you",
  };

  return (
    <header className="relative pt-12 pb-16 sm:py-20 px-4 sm:px-8 max-w-6xl mx-auto bg-[#FFF0F4]">
      {/* Balanced 2-column editorial card layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Romantic Birthday Card Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Subtle Date Tag */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-[#F7B6CA]" />
            <span className="text-xs font-serif tracking-[0.2em] text-[#896F7A] uppercase font-medium">
              October 21, 2026 • For Snehal
            </span>
          </div>

          {/* Handwritten greeting */}
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-handwriting text-3xl sm:text-4xl text-[#F0447E] mb-1"
          >
            Hey, Snehal...
          </motion.span>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-serif text-[#49303A] font-normal tracking-tight leading-[1.1] mb-2"
          >
            Today is all about you.
          </motion.h1>

          {/* Secondary Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-[#D92F68] font-light mb-5"
          >
            Happy Birthday, beautiful.
          </motion.h2>

          {/* Supporting line */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-xl text-base sm:text-lg text-[#896F7A] font-serif leading-relaxed mb-8"
          >
            &ldquo;A little collection of moments, wishes, and all the happiness you deserve.&rdquo;
          </motion.p>

          {/* Explore Our Memories Button */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            onClick={onScrollNext}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFFFFF] border border-[#F5CAD8] text-xs sm:text-sm font-serif tracking-widest uppercase text-[#F0447E] hover:bg-[#FFF7FA] hover:border-[#F0447E] shadow-sm transition-all group cursor-pointer font-medium"
          >
            <span>Explore Our Memories</span>
            <ChevronDown className="w-4 h-4 text-[#F0447E] group-hover:translate-y-0.5 transition-transform" />
          </motion.button>
        </div>

        {/* Right Column: Prominent Ivory Photo Frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-sm sm:max-w-md"
          >
            {/* Soft blush washi tape accent */}
            <div className="washi-tape-blush -top-2.5 left-1/2 -translate-x-1/2" />

            {/* Crisp white photo card with soft pink shadow */}
            <div className="bg-[#FFFFFF] p-3.5 pb-6 rounded-2xl border border-[#F5CAD8] shadow-photo-clean">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#FFE5EC]">
                <Image
                  src={heroPhoto.src}
                  alt={heroPhoto.caption || "A special moment with Pillyaaaa💞"}
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, 450px"
                  className="object-cover object-center"
                />
              </div>

              {/* Heart and caption */}
              <div className="pt-3.5 flex items-center justify-center gap-1.5 text-center font-handwriting text-xl sm:text-2xl text-[#49303A]">
                <Heart className="w-4 h-4 fill-[#F0447E] text-[#F0447E] shrink-0" />
                <span>{heroPhoto.caption || "Every little moment with you"}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
