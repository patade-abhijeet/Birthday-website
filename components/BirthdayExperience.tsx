"use client";

import React, { useRef } from "react";
import BirthdayHero from "./BirthdayHero";
import MemoryGallery from "./MemoryGallery";
import SpecialThings from "./SpecialThings";
import BirthdayCake from "./BirthdayCake";
import BirthdayLetter from "./BirthdayLetter";
import BirthdayWishes from "./BirthdayWishes";
import FinalSurprise from "./FinalSurprise";
import FloatingHearts from "./FloatingHearts";
import { Heart } from "lucide-react";

export default function BirthdayExperience() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScrollNext = () => {
    const galleryEl = document.getElementById("moving-photo-wall");
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div ref={containerRef} className="relative w-full bg-[#FFF0F4] min-h-screen">
      {/* Delicate Continuous Floating Hearts from Bottom to Top */}
      <FloatingHearts />

      {/* Romantic Birthday Card Hero */}
      <BirthdayHero onScrollNext={handleScrollNext} />

      {/* Cinematic Transition into Photo Wall */}
      <div className="flex items-center justify-center gap-4 py-4 max-w-xs mx-auto">
        <span className="w-16 h-px bg-[#F7B6CA]" />
        <span className="text-[#F0447E] text-xs">
          <Heart className="w-3.5 h-3.5 fill-[#F0447E]" />
        </span>
        <span className="w-16 h-px bg-[#F7B6CA]" />
      </div>

      {/* Two-Row Continuously Moving Photo Wall */}
      <MemoryGallery />

      {/* The Little Things That Make You Special */}
      <SpecialThings />

      {/* Interactive Birthday Cake Section */}
      <BirthdayCake />

      {/* Heartfelt Stationery Birthday Letter */}
      <BirthdayLetter />

      {/* Keepsakes & Wishes */}
      <BirthdayWishes />

      {/* Soft Pink Resonant Final Section */}
      <FinalSurprise onReplay={handleReplay} />
    </div>
  );
}
