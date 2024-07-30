/** @type {import('tailwindcss').Config} */
import { twColors } from "./utils/tw-colors";
module.exports = {
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      extend: {
        screens: {
          mn: "900px",
        },
      },
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      "main" : "#6E45E9",
      "dark-primary": "#6E45E9",
      "dark-secondary":'#110A14',
      "light-primary": "#dad5eb ",
      "light-secondary": "#321848",
      "btn-focus":"#3E15B7",
      ...twColors,
    },
    fontSize: {
      sm: "0.6rem",
      sub: "15px",
      base: "0.8rem",
      lg: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
  },
  plugins: [],
};
