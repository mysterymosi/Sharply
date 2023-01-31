/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "5rem",
        xl: "10rem",
        "2xl": "10rem",
      },
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      alpha: "lower-alpha",
      roman: "upper-roman",
    },
    fontSize: {
      xs: ["14px", "20px"],
      base: ["15px", "24px"],
      sm: ["16px", "25px"],
      lg: ["20px", "24px"],
      xl: ["27px", "32px"],
      xxl: ["56px", "64px"],
    },
    colors: {
      red: "#dc2626",
      red2: "#F18C8C",
      primary: "#5BAB0A",
      white: "#ffffff",
      white2: "#F5F5F5",
      white3: "#F7F7F7",
      white4: "#E8E8E8",
      green: "#5BAB0A",
      green2: "#BDDD9D",
      green3: "#4BD158",
      green4: "#8CF1A8",
      blue: "#0025C1",
      blue1: "#4C6FFF",
      blue2: "#335AFF",
      blue3: "#5096F1",
      blue4: "rgba(197, 220, 250, 0.5)",
      black: "#000000",
      black1: "#323242",
      faintYellow: "rgba(249,242,180,0.2)",
      orange: "#E9A802",
      yellow: "#F9F2B4",
      grey: "#EAEAEA",
      grey2: "#757575",
      grey3: "#3D3D3D",
      grey4: "#898A8D",
      grey5: "#676767",
      grey6: "#F0F0F0",
      grey7: "rgba(217, 217, 217, 0.23)",
      grey8: "rgba(217, 217, 217, 0.31)",
      grey9: "#D9D9D9",
      grey10: "rgba(217, 217, 217, 0.4)",
      grey11: "rgba(0, 0, 0, 0.2)",
      grey12: "#C0C0C0",
      grey13: "#E0E0E0",
      grey14: "rgba(230, 230, 230, 0.5)",
      gold: "#C08B02",
      purple: "#ECF0FF",
      purple1: "#8C9CF1",
    },
    extend: {
      margin: {
        "190px": "190px",
      },
      boxShadow: {
        "3xl": "0px 0px 30px rgba(0, 0, 0, 0.06)",
      },
      backgroundImage: {
        "risk-hero": "url('/images/risk-assessment.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
