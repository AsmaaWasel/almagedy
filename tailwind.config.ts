import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1320px" },
    },
    extend: {
      colors: {
        ivory: "#FBF9F5",
        beige: {
          DEFAULT: "#F3ECE1",
          dark: "#E7DCC9",
        },
        night: {
          DEFAULT: "#0B1C2C",
          light: "#13283D",
          deep: "#070F18",
        },
        sky: {
          DEFAULT: "#62B2E3",
          dark: "#3D8AC0",
          light: "#A9D6F2",
        },
        gold: {
          DEFAULT: "#C8A44D",
          light: "#E2C580",
          dark: "#9C7C32",
        },
        ink: "#1C2127",
      },
      fontFamily: {
        cairo: ["var(--font-cairo)", "sans-serif"],
      },
      borderRadius: {
        "3xl": "1.75rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(11, 28, 44, 0.15)",
        gold: "0 10px 40px -8px rgba(200, 164, 77, 0.35)",
        glass: "0 8px 32px 0 rgba(11, 28, 44, 0.25)",
      },
      backgroundImage: {
        "grain": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.22,1,0.36,1) forwards",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 24s linear infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
