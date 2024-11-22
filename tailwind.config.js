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
        ccccc: ["Lilita One", "sans - serif"],
        londrinaoutline: ["Londrina Outline", "sans-serif"],
        Agdasima: ["Teko", "sans-serif"],
        Cormant: ["Cormorant Garamond", "serif"],
        cursiv: ["Cedarville Cursive", "cursive"],
      },
      keyframes: {
        borderColorChange: {
          "0%": { borderColor: "#4285F4" }, // Blue
          "25%": { borderColor: "#0F9D58" }, // Green
          "50%": { borderColor: "#F4B400" }, // Yellow
          "75%": { borderColor: "#DB4437" }, // Red
          "100%": { borderColor: "#4285F4" }, // Back to Blue
        }, 'pull-up': {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        "border-color-change": "borderColorChange 2s linear infinite",
      'pull-up': 'pull-up 0.5s ease-out forwards',},
    }, 
  },
  plugins: [],
};
