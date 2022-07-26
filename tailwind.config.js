/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        google: {
          100: "#212125",
          200: "#4b4c52",
          300: "#303134",
          400: "#797e83",
          500: "#161716",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
