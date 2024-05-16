/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#b6895b",
        secondary: "#010101",
      },
      backgroundImage: {
        homepage: "url(/images/bg-home.jpg)",
        productpage: "url(/images/bg-product.jpg)",
        aboutpage: "url(/images/bg-about1.jpeg)",
      },
      screens: {
        phone: "376px",
      },
    },
  },
  plugins: [],
};
