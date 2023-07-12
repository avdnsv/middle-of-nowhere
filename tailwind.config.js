/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      pink: "#ef476f",
      blue: "#758bfd",
      periwinkle: "#aeb8fe",
      white: "#f1f2f6",
      black: "#191923",
    },
    extend: {
      animation: {
        appearance: "fade 1.5s ease forwards",
        skaling: "scale 0.5s ease forwards",
        upright: "to-up-right 0.6s ease-in-out forwards",
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "to-up-right": {
          "0%, 100%": { transform: "translate(0)" },
          "50%": { transform: "translate(4px, -4px)" },
        },
        scale: {
          "0%": { transform: "scale(0)" },
          "80%": { transform: "scale(120%)" },
          "100%": { transform: "none" },
        },
      },
    },
  },
  plugins: [],
};
