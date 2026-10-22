"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Mail } from "lucide-react";
import { birthdayConfig } from "@/config/birthday";

export default function BirthdayLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const letter = birthdayConfig.letter;

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#FFF7FA]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#F5CAD8] text-[#F0447E] text-xs font-serif tracking-wider uppercase mb-3 shadow-sm">
            <Mail className="w-3.5 h-3.5 text-[#F0447E]" />
            <span>A Letter For You</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#49303A] font-normal tracking-tight">
            {letter.sectionTitle}
          </h2>
        </div>

        {/* Envelope & Letter Container */}
        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              /* Sealed Envelope View */
              <motion.div
                key="closed-envelope"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                onClick={() => setIsOpen(true)}
                className="cursor-pointer group"
              >
                <div className="relative mx-auto w-full max-w-lg aspect-[16/11] bg-[#FFFFFF] rounded-2xl border-2 border-[#F5CAD8] p-8 shadow-soft-card flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:border-[#F0447E] group-hover:shadow-photo-hover">
                  {/* Subtle envelope crease line */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 border-b border-[#F5CAD8]/70 pointer-events-none" />

                  {/* Rose Wax Seal */}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F0447E] border-2 border-[#FFFFFF] shadow-md flex items-center justify-center mb-4 group-hover:bg-[#D92F68] transition-colors"
                  >
                    <Heart className="w-8 h-8 text-white fill-white" />
                  </motion.div>

                  <p className="relative z-10 text-base sm:text-lg font-serif text-[#49303A] tracking-wide">
                    {letter.envelopePreviewPrompt}
                  </p>
                  <p className="relative z-10 text-xs text-[#896F7A] font-serif italic mt-1.5">
                    Click anywhere to open
                  </p>
                </div>
              </motion.div>
            ) : (
              /* Unfolded Stationery Letter */
              <motion.div
                key="opened-letter"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="stationery-letter bg-[#FFFFFF] rounded-2xl p-8 sm:p-14 text-[#49303A] shadow-soft-card border border-[#F5CAD8] relative">
                  {/* Letter Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#F5CAD8] mb-8">
                    <div className="flex items-center gap-1.5">
                      <Heart className="w-4 h-4 fill-[#F0447E] text-[#F0447E]" />
                      <span className="text-xs font-serif tracking-widest text-[#896F7A] uppercase font-semibold">
                        October 21, 2026
                      </span>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-xs font-serif text-[#896F7A] hover:text-[#49303A] transition cursor-pointer"
                    >
                      Fold letter ✉️
                    </button>
                  </div>

                  {/* Salutation */}
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#49303A] font-normal mb-6">
                    {letter.salutation}
                  </h3>

                  {/* Body Paragraphs */}
                  <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#49303A] font-serif">
                    {letter.paragraphs.map((para, i) => (
                      <p key={i} className="indent-4 sm:indent-6">
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Closing & Signature */}
                  <div className="mt-10 pt-6 border-t border-[#F5CAD8]">
                    <p className="text-base sm:text-lg font-serif text-[#49303A] whitespace-pre-line leading-relaxed">
                      {letter.closing}
                    </p>
                    {letter.signature && (
                      <p className="mt-4 text-2xl sm:text-3xl font-handwriting text-[#F0447E]">
                        {letter.signature}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
