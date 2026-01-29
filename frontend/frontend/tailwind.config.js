/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "plum-dark": "#1a0b1a",
        "plum-deep": "#0d050d",
        "neon-pink": "#ff2d95",
        "soft-pink": "#fce4ec",
        "soft-lavender": "#e0b0ff",
        "rose-gold": "#b76e79",

                        "plum-deep": "#0d050d",
                        "lavender-glow": "#d8b4fe",
                        "soft-lavender": "#e9d5ff",
                        "deep-violet": "#7c3aed",
                        "dreamy-purple": "#a78bfa",
                        "lavender-accent": "#9a78c2",
      },
      fontFamily: {
        serif: ["DM Serif Display", "serif"],
        sans: ["Inter", "sans-serif"],
        display: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")],
}
