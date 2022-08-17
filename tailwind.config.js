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
      white2: "#F5F5F5",
      white3: "#F7F7F7",
      white4: "#E8E8E8",
      green: "#5BAB0A",
      green2: "#BDDD9D",
      blue: "#C5E8FC",
      black: "#000000",
      faintYellow: "rgba(249,242,180,0.2)",
      yellow: "#F9F2B4",
      grey: "#424242",
      grey2: "#757575",
      grey3: "#3D3D3D",
    },
    extend: {
      margin: {
        "190px": "190px",
      },
    },
  },
  plugins: [],
};
