import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAFAF8",
        sage: "#9aa5a5",
        sageDark: "#879696",
        bronze: "#B8976C",
        ink: "#212121",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        script: ["var(--font-vibes)", "cursive"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        wind: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "pulse-ring": {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.75", transform: "scale(1.07)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(-2deg)" },
          "50%": { transform: "translateY(-12px) rotate(2deg)" },
        },
        "chevron-nudge": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "50%": { transform: "translateY(8px)", opacity: "1" },
        },
      },
      animation: {
        wind: "wind 4.5s ease-in-out infinite",
        "pulse-ring": "pulse-ring 3.6s ease-in-out infinite",
        "spin-slow": "spin-slow 3.2s linear infinite",
        float: "float 5s ease-in-out infinite",
        "chevron-nudge": "chevron-nudge 1.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
