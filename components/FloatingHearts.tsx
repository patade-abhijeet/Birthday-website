"use client";

import React, { useMemo } from "react";
import { Heart } from "lucide-react";

interface HeartItem {
  id: number;
  left: number; // percentage (4 to 96)
  size: number; // pixels (14 to 26)
  duration: number; // seconds (7 to 12)
  delay: number; // seconds (negative for immediate stagger)
  drift: number; // pixels (-40 to +40)
  rotation: number; // degrees (-25 to +25)
  opacity: number; // 0.35 to 0.65
  color: string;
  isFilled: boolean;
  isDesktopOnly: boolean;
}

export default function FloatingHearts() {
  // Deterministic heart parameters to avoid SSR hydration mismatch
  // 6 hearts on mobile, 12 hearts on desktop
  const hearts: HeartItem[] = useMemo(() => {
    const colors = ["#F0447E", "#F7B6CA", "#D92F68", "#F5CAD8", "#FB7185"];
    
    // 12 distinct staggered hearts
    const configs = [
      // Mobile & Desktop (6 hearts)
      { left: 12, size: 18, duration: 8.5, delay: -1.2, drift: 24, rotation: 12, opacity: 0.55, colorIdx: 0, isFilled: true, isDesktopOnly: false },
      { left: 32, size: 22, duration: 10.0, delay: -5.4, drift: -28, rotation: -16, opacity: 0.45, colorIdx: 1, isFilled: false, isDesktopOnly: false },
      { left: 52, size: 16, duration: 7.8, delay: -3.0, drift: 18, rotation: 10, opacity: 0.6, colorIdx: 2, isFilled: true, isDesktopOnly: false },
      { left: 68, size: 24, duration: 11.2, delay: -7.6, drift: -22, rotation: -14, opacity: 0.4, colorIdx: 3, isFilled: true, isDesktopOnly: false },
      { left: 84, size: 15, duration: 8.2, delay: -2.2, drift: 16, rotation: 18, opacity: 0.5, colorIdx: 4, isFilled: false, isDesktopOnly: false },
      { left: 44, size: 20, duration: 9.4, delay: -6.0, drift: -15, rotation: -8, opacity: 0.48, colorIdx: 0, isFilled: true, isDesktopOnly: false },

      // Desktop Only (6 additional hearts = 12 total)
      { left: 6, size: 16, duration: 9.0, delay: -4.0, drift: 20, rotation: 15, opacity: 0.45, colorIdx: 1, isFilled: true, isDesktopOnly: true },
      { left: 22, size: 24, duration: 11.5, delay: -8.5, drift: -30, rotation: -20, opacity: 0.5, colorIdx: 2, isFilled: false, isDesktopOnly: true },
      { left: 60, size: 18, duration: 8.0, delay: -1.8, drift: 25, rotation: 14, opacity: 0.55, colorIdx: 4, isFilled: true, isDesktopOnly: true },
      { left: 76, size: 20, duration: 10.5, delay: -6.8, drift: -18, rotation: -12, opacity: 0.42, colorIdx: 0, isFilled: false, isDesktopOnly: true },
      { left: 92, size: 22, duration: 9.6, delay: -3.6, drift: -25, rotation: -16, opacity: 0.5, colorIdx: 3, isFilled: true, isDesktopOnly: true },
      { left: 38, size: 14, duration: 7.5, delay: -0.8, drift: 15, rotation: 8, opacity: 0.6, colorIdx: 1, isFilled: true, isDesktopOnly: true },
    ];

    return configs.map((c, i) => ({
      id: i,
      left: c.left,
      size: c.size,
      duration: c.duration,
      delay: c.delay,
      drift: c.drift,
      rotation: c.rotation,
      opacity: c.opacity,
      color: colors[c.colorIdx],
      isFilled: c.isFilled,
      isDesktopOnly: c.isDesktopOnly,
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-20"
    >
      {hearts.map((h) => (
        <div
          key={h.id}
          className={`floating-heart ${h.isDesktopOnly ? "hidden sm:block" : ""}`}
          style={
            {
              left: `${h.left}%`,
              animationDuration: `${h.duration}s`,
              animationDelay: `${h.delay}s`,
              "--drift": `${h.drift}px`,
              "--rot": `${h.rotation}deg`,
              "--target-opacity": h.opacity,
            } as React.CSSProperties
          }
        >
          <Heart
            style={{
              width: `${h.size}px`,
              height: `${h.size}px`,
              color: h.color,
              fill: h.isFilled ? h.color : "transparent",
            }}
          />
        </div>
      ))}
    </div>
  );
}
