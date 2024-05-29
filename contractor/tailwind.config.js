/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F6D218",
        secondary: "#6C757D",
        success: "#28A745",
        danger: "#DC3545",
        warning: "#FFC107",
        info: "#17A2B8",
        dark: "#343A40",
        light: "#F8F9FA",
        white: "#FFFFFF",
        black: "#000000",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        mobile: "320px",
        tablet: "768px",
        laptop: "1024px",
        laptopLarge: "1440px",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        center: true,
      },
    },
  },
  plugins: [],
};
