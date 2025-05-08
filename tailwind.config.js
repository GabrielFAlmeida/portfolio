/** @type {import('tailwindcss').Config} */
export default {
  // content: ["./index.html", "./src/**/*.{js,jsx}"],
  content: [
    "./assets/**/*.{vue,js,ts,jsx,tsx}",
    "./templates/**/*.{html,twig}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        utils: {
          white: {
            100: "#ffffff",
            200: "#f8f8f8",
          },
          black: {
            100: "#000000",
            200: "#1b1b1b",
            300: "#11111a",
          },
          gray: {
            100: "#716a6a",
          },
          success: "#149700",
          error: "#e20d18",
        },
        main: {
          purple: {
            100: "#81599f",
            200: "#a87bcb",
          },
          blue: {
            100: "#490de4",
            200: "#5b4cf3",
            300: "#d9ecff",
            400: "#e9f2fb",
          },
          cyan: {
            100: "#3cd4d9",
            200: "#a4e9eb",
          },
          purplue: {
            100: "#7d6ef2",
            200: "#897efa",
            300: "#9a8fec",
            400: "#d3cff4",
            500: "#d3cff4",
          },
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      animation: {},
      keyframes: {},
      backgroundImage: {},
      spacing: {
        32: "8rem",
        64: "16rem",
        128: "32rem",
      },
      borderWidth: {
        6: "6px",
      },

      strokeWidth: {
        20: "20px",
      },
    },
    plugins: [],
  },
};
