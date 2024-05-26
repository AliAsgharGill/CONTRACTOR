/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "mobile": "320px",
        "tablet": "768px",
        "laptop": "1024px",
        "laptopLarge": "1440px",
      },
    },
  },
  plugins: [],
};
