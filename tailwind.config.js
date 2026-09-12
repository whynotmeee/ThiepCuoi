/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fdfbf7",
        rosegold: "#b76e79",
        blush: "#f7e7e4",
        sage: "#8a9a7b",
        gold: "#c9a227",
        ink: "#3d3130",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        script: ["var(--font-greatvibes)", "cursive"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatUp: {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { transform: "translateY(-120vh) rotate(360deg)", opacity: "0" },
        },
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.08)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 1s ease-out forwards",
        floatUp: "floatUp linear infinite",
        pulseSoft: "pulseSoft 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
