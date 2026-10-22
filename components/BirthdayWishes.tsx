"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { birthdayConfig } from "@/config/birthday";

export default function BirthdayWishes() {
  const wishes = birthdayConfig.wishes.items;

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-8 max-w-5xl mx-auto bg-[#FFF0F4]">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#F5CAD8] text-[#F0447E] text-xs font-serif tracking-wider uppercase mb-3 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#F0447E]" />
          <span>Little Wishes</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#49303A] font-normal tracking-tight mb-3">
          {birthdayConfig.wishes.sectionTitle}
        </h2>
        <p className="text-sm sm:text-base text-[#896F7A] font-serif italic">
          {birthdayConfig.wishes.subtitle}
        </p>
      </div>

      {/* Clean Editorial Wishes List */}
      <div className="max-w-3xl mx-auto divide-y divide-[#F5CAD8]">
        {wishes.map((wish, index) => (
          <motion.div
            key={wish.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="py-6 sm:py-8 flex items-start gap-4 sm:gap-6 group"
          >
            {/* Number badge */}
            <div className="shrink-0 w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#F5CAD8] group-hover:border-[#F0447E] group-hover:bg-[#FFF7FA] flex items-center justify-center font-serif text-sm font-semibold text-[#F0447E] shadow-sm transition-colors">
              0{wish.id}
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-serif text-[#49303A] font-normal leading-snug group-hover:text-[#F0447E] transition-colors">
                {wish.title}
              </h3>
              {wish.description && (
                <p className="mt-1.5 text-xs sm:text-sm text-[#896F7A] font-sans leading-relaxed">
                  {wish.description}
                </p>
              )}
            </div>

            <div className="shrink-0 pt-1">
              <Heart className="w-4 h-4 text-[#F7B6CA] group-hover:fill-[#F0447E] group-hover:text-[#F0447E] transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
