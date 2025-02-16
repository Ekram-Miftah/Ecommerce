/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['"Comic Sans MS"', 'cursive', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
