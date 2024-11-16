/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.jsx", // Combine both content paths here
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        grotesk: ["Space Grotesk", "sans-serif"],
        lilita: ["Lilita One", "sans - serif"],
        londrinaoutline: ["Londrina Outline", "sans-serif"],
        Agdasima: ["Teko", "sans-serif"],
        Cormant: ["Cormorant Garamond", "serif"],
      },
      keyframes: {
        borderColorChange: {
          "0%": { borderColor: "#4285F4" }, // Blue
          "25%": { borderColor: "#0F9D58" }, // Green
          "50%": { borderColor: "#F4B400" }, // Yellow
          "75%": { borderColor: "#DB4437" }, // Red
          "100%": { borderColor: "#4285F4" }, // Back to Blue
        },
      },
      animation: {
        "border-color-change": "borderColorChange 2s linear infinite",
      },
    },
  },
  plugins: [],
};
