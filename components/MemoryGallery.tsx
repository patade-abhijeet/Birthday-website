"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  ZoomIn,
  Play,
  Pause,
} from "lucide-react";
import { birthdayConfig } from "@/config/birthday";

export default function MemoryGallery() {
  const memories = birthdayConfig.gallery.memories;

  // Split the 22 photos into two coordinated rows (11 photos each)
  const topRowPhotos = memories.slice(0, 11);
  const bottomRowPhotos = memories.slice(11, 22);

  // Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Global pause toggle for accessibility
  const [isWallPaused, setIsWallPaused] = useState(false);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + memories.length) % memories.length : 0
        );
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % memories.length : 0
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, memories.length]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  return (
    <section
      id="moving-photo-wall"
      className="relative py-16 sm:py-24 bg-[#FFF0F4] overflow-hidden select-none"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 px-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#F5CAD8] text-[#F0447E] text-xs font-serif tracking-wider uppercase mb-3 shadow-sm">
          <Heart className="w-3.5 h-3.5 fill-[#F0447E] text-[#F0447E]" />
          <span>Moving Memory Wall</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#49303A] font-normal tracking-tight mb-3">
          {birthdayConfig.gallery.title}
        </h2>
        <p className="text-sm sm:text-base text-[#896F7A] font-serif italic max-w-lg mx-auto">
          &ldquo;Little moments, moving memories. Tap any photo to take a closer look.&rdquo;
        </p>

        {/* Play/Pause Wall Animation Control */}
        <div className="mt-4 flex items-center justify-center">
          <button
            onClick={() => setIsWallPaused(!isWallPaused)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] hover:bg-[#FFF7FA] border border-[#F5CAD8] text-xs font-serif tracking-wider text-[#49303A] transition shadow-sm cursor-pointer"
            aria-label={isWallPaused ? "Resume photo wall movement" : "Pause photo wall movement"}
          >
            {isWallPaused ? (
              <>
                <Play className="w-3.5 h-3.5 text-[#F0447E] fill-[#F0447E]" />
                <span className="font-sans text-[11px] text-[#896F7A]">Resume Wall</span>
              </>
            ) : (
              <>
                <Pause className="w-3.5 h-3.5 text-[#F0447E]" />
                <span className="font-sans text-[11px] text-[#896F7A]">Pause Movement</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* ============================================================ */}
      {/* TWO-ROW CONTINUOUSLY MOVING TRACKS                            */}
      {/* ============================================================ */}
      <div className="space-y-6 sm:space-y-8 w-full overflow-hidden">
        {/* ROW 1: Travels LEFT TO RIGHT (seamless infinite loop) */}
        <div className="relative w-full overflow-hidden py-1">
          <div
            className="marquee-track flex gap-4 sm:gap-6 animate-marquee-ltr"
            style={{
              animationPlayState: isWallPaused || lightboxIndex !== null ? "paused" : "running",
              animationDuration: "44s",
            }}
          >
            {/* Set 1 + Duplicate Set 2 for 100% seamless wrap */}
            {[...topRowPhotos, ...topRowPhotos].map((photo, i) => {
              const actualIndex = i % topRowPhotos.length;
              const isLandscape = photo.orientation === "landscape";

              return (
                <div
                  key={`row1-${photo.id}-${i}`}
                  onClick={() => openLightbox(actualIndex)}
                  className={`photo-card shrink-0 p-2.5 sm:p-3 pb-3 sm:pb-4 cursor-pointer group ${
                    isLandscape
                      ? "w-[280px] sm:w-[350px]"
                      : "w-[180px] sm:w-[220px]"
                  }`}
                >
                  <div
                    className={`relative w-full overflow-hidden rounded-xl bg-[#FFE5EC] ${
                      isLandscape ? "aspect-[16/10]" : "aspect-[3/4]"
                    }`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.caption || "Special moment with Pillyaaaa💞"}
                      fill
                      sizes="(max-width: 640px) 240px, 350px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Subtle zoom indicator on hover */}
                    <div className="absolute bottom-2 right-2 p-1.5 rounded-full bg-white/85 text-[#F0447E] shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {photo.caption && (
                    <div className="pt-2 px-1 text-center">
                      <p className="font-handwriting text-base sm:text-lg text-[#49303A] truncate">
                        {photo.caption}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ROW 2: Travels RIGHT TO LEFT (seamless infinite loop) */}
        <div className="relative w-full overflow-hidden py-1">
          <div
            className="marquee-track flex gap-4 sm:gap-6 animate-marquee-rtl"
            style={{
              animationPlayState: isWallPaused || lightboxIndex !== null ? "paused" : "running",
              animationDuration: "44s",
            }}
          >
            {/* Set 1 + Duplicate Set 2 for 100% seamless wrap */}
            {[...bottomRowPhotos, ...bottomRowPhotos].map((photo, i) => {
              const actualIndex = 11 + (i % bottomRowPhotos.length);
              const isLandscape = photo.orientation === "landscape";

              return (
                <div
                  key={`row2-${photo.id}-${i}`}
                  onClick={() => openLightbox(actualIndex)}
                  className={`photo-card shrink-0 p-2.5 sm:p-3 pb-3 sm:pb-4 cursor-pointer group ${
                    isLandscape
                      ? "w-[280px] sm:w-[350px]"
                      : "w-[180px] sm:w-[220px]"
                  }`}
                >
                  <div
                    className={`relative w-full overflow-hidden rounded-xl bg-[#FFE5EC] ${
                      isLandscape ? "aspect-[16/10]" : "aspect-[3/4]"
                    }`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.caption || "Special moment with Pillyaaaa💞"}
                      fill
                      sizes="(max-width: 640px) 240px, 350px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Subtle zoom indicator on hover */}
                    <div className="absolute bottom-2 right-2 p-1.5 rounded-full bg-white/85 text-[#F0447E] shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {photo.caption && (
                    <div className="pt-2 px-1 text-center">
                      <p className="font-handwriting text-base sm:text-lg text-[#49303A] truncate">
                        {photo.caption}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* ROMANTIC FOCUSED LIGHTBOX MODAL                              */}
      {/* ============================================================ */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-[#49303A]/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors cursor-pointer"
              aria-label="Close photo view"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Prev Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex - 1 + memories.length) % memories.length);
              }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors cursor-pointer"
              aria-label="Previous photograph"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Next Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex + 1) % memories.length);
              }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors cursor-pointer"
              aria-label="Next photograph"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Center Photo Display */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[88vh] w-full flex flex-col items-center justify-center"
            >
              <div className="relative w-full h-[62vh] sm:h-[76vh] flex items-center justify-center bg-transparent">
                <Image
                  src={memories[lightboxIndex].src}
                  alt={memories[lightboxIndex].caption || "Full photo view"}
                  fill
                  sizes="100vw"
                  className="object-contain rounded-lg drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Lightbox Caption Card */}
              {memories[lightboxIndex].caption && (
                <div className="mt-3 py-2 px-5 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md shadow-sm text-center">
                  <p className="text-sm sm:text-base text-[#49303A] font-serif italic">
                    {memories[lightboxIndex].caption}
                  </p>
                  <p className="text-xs text-[#896F7A] mt-0.5 font-sans">
                    {lightboxIndex + 1} of {memories.length}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
