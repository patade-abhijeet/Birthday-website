"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { Heart, RotateCcw } from "lucide-react";
import { birthdayConfig } from "@/config/birthday";

interface FinalSurpriseProps {
  onReplay: () => void;
}

export default function FinalSurprise({ onReplay }: FinalSurpriseProps) {
  const finalData = birthdayConfig.finalSurprise;

  // Centerpiece couple photograph for the ending
  const closingPhoto = birthdayConfig.gallery.memories[3] || {
    src: "/images/couple/IMG_20260521_013026.jpg.jpeg",
    caption: "Quiet moments together",
  };

  const triggerHeartConfetti = useCallback(() => {
    try {
      const scalar = 2;
      const loveHeart = confetti.shapeFromPath({
        path: "M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -75,-76 -151,-151 -151,-227 0,-42 33,-75 75,-75 38,0 57,18 76,56z",
      });

      confetti({
        shapes: [loveHeart],
        scalar,
        particleCount: 28,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#F0447E", "#F7B6CA", "#FFE5EC", "#D92F68", "#FFFFFF"],
        ticks: 200,
        gravity: 0.65,
      });
    } catch {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#F0447E", "#F7B6CA", "#FFE5EC"],
      });
    }
  }, []);

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 bg-[#FFF7FA] text-center border-t border-[#F5CAD8]">
      <div className="max-w-2xl mx-auto">
        {/* Eyebrow */}
        <span className="text-xs font-serif tracking-[0.25em] text-[#F0447E] uppercase block mb-3 font-semibold">
          {finalData.eyebrow}
        </span>

        {/* Main Quote */}
        <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#49303A] font-normal leading-relaxed mb-8 px-4">
          &ldquo;{finalData.mainQuote}&rdquo;
        </p>

        {/* Beautiful Photograph Anchor */}
        <div className="relative mx-auto max-w-lg mb-8">
          <div className="photo-card p-3 sm:p-3.5 pb-6 bg-[#FFFFFF]">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#FFE5EC]">
              <Image
                src={closingPhoto.src}
                alt={closingPhoto.caption || "Closing memory"}
                fill
                sizes="(max-width: 640px) 95vw, 550px"
                className="object-cover object-center"
              />
            </div>
            <div className="pt-3 text-center font-handwriting text-xl text-[#49303A]">
              {closingPhoto.caption || "Together in our own world"}
            </div>
          </div>
        </div>

        {/* Birthday Signoff */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#49303A] font-normal tracking-tight mb-2">
          Happy Birthday, Pillyaaaa💞. ❤️
        </h2>

        {finalData.signature && (
          <p className="font-handwriting text-2xl sm:text-3xl text-[#F0447E] mb-8">
            — {finalData.signature}
          </p>
        )}

        {/* Actions: Celebrate & Replay */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={triggerHeartConfetti}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#F0447E] hover:bg-[#D92F68] text-white text-xs sm:text-sm font-serif tracking-wider uppercase transition shadow-photo-clean hover:shadow-photo-hover active:scale-95 cursor-pointer font-medium"
          >
            <Heart className="w-3.5 h-3.5 fill-white" />
            <span>Celebrate ❤️</span>
          </button>

          <button
            onClick={onReplay}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#FFFFFF] hover:bg-[#FFF7FA] border border-[#F5CAD8] text-xs sm:text-sm font-serif tracking-wider uppercase text-[#49303A] transition active:scale-95 cursor-pointer shadow-sm"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#F0447E]" />
            <span>Wander through memories again</span>
          </button>
        </div>

        {/* Date stamp footer */}
        <p className="mt-12 text-xs font-serif tracking-widest text-[#896F7A] uppercase font-medium">
          October 21, 2026 • Forever & Always
        </p>
      </div>
    </section>
  );
}
