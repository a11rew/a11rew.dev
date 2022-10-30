/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: {
            black: "#141414",
            white: "#FFFFFF",
          },
          text: {
            white: {
              DEFAULT: "#EBEBEB",
              muted: "#7A7A7A",
            },
          },
        },
      },
      keyframes: {
        "over-bounce": {
          "0%, 80%": {
            transform: "translateY(0%)",
            "animation-timing-function": "ease-in-out",
          },
          "100%": {
            transform: "translateY(100%)",
            "animation-timing-function": "ease-in-out",
          },
        },
      },
      animation: {
        "over-bounce": "over-bounce 1s infinite alternate",
      },
    },
  },
  plugins: [],
};
