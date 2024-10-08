/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#000053",
        tertiary: "#945D60",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "terracotta": "#945D60", 
        "herb": "#000053",
        "herb-lite": "#b1b7b0", 
        "chilli": "#4D7C8A", 
        "charcoal": "#3C3C3C", 
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/AbstractLines.jpg')",
      },
      listStyleType: {
        disc: 'circle', // Use 'circle' to specify open circles
      },
    },
  },
  plugins: [],
};