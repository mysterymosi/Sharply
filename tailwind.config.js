/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ["14px", "20px"],
      base: ["15px", "24px"],
      sm: ["16px", "25px"],
      lg: ["20px", "24px"],
      xl: ["24px", "32px"],
      xxl: ["56px", "64px"],
    },
    colors: {
      primary: "#5BAB0A",
      white: "#ffffff",
      green: "#5BAB0A",
      blue: "#C5E8FC",
      black: "#000000",
    },
    extend: {
      margin: {
        "190px": "190px",
      },
    },
  },
  plugins: [],
};
