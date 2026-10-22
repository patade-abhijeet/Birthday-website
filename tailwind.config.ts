import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: "#FFF7FA",
          100: "#FFF0F4",
          200: "#FFE5EC",
          300: "#FCD0DC",
          400: "#F7B6CA",
          500: "#F5CAD8",
        },
        romantic: {
          primary: "#F0447E",
          deep: "#D92F68",
          soft: "#F7B6CA",
          border: "#F5CAD8",
        },
        ink: {
          primary: "#49303A",
          secondary: "#896F7A",
          muted: "#A9929C",
        },
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Inter'", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        handwriting: ["'Caveat'", "'Sacramento'", "cursive"],
      },
      boxShadow: {
        "soft-card": "0 8px 24px -4px rgba(240, 68, 126, 0.08), 0 2px 6px rgba(73, 48, 58, 0.04)",
        "photo-clean": "0 10px 25px -4px rgba(240, 68, 126, 0.12), 0 2px 8px rgba(73, 48, 58, 0.06)",
        "photo-hover": "0 18px 32px -4px rgba(240, 68, 126, 0.2), 0 4px 12px rgba(73, 48, 58, 0.08)",
        "pink-glow": "0 0 24px rgba(240, 68, 126, 0.28)",
      },
      animation: {
        "marquee-ltr": "marqueeLtr 42s linear infinite",
        "marquee-rtl": "marqueeRtl 42s linear infinite",
      },
      keyframes: {
        marqueeLtr: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        marqueeRtl: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
