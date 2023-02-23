/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f75454",
        secondary: "#efe6d5",
        lightGray: "#a3a29f",
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
