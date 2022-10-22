/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,tsx}",
    "./public/**/*.html",
    "./components/**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        MPL: ["M PLUS 1p"],
      },
    },
  },
};
