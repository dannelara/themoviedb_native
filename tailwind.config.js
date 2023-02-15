/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/screens/**/*.js",
    "./src/components/**/*.js",
  ],
  theme: {
    extend: {
      backgroundColor: {
        dark: "#171717",
        dark_light: "#1e1e1e",
        dark_gradient: "rgba(23, 23, 23, 0.63)",
      },
      height: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
