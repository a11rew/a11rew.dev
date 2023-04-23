/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        textPrimary: "var(--primary-text)",
        textSecondary: "var(--secondary-text)",
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
        "over-bounce-reverse": {
          "0%, 80%": {
            transform: "translateY(0%)",
            "animation-timing-function": "ease-in-out",
          },
          "100%": {
            transform: "translateY(-100%)",
            "animation-timing-function": "ease-in-out",
          },
        },
      },
      animation: {
        "over-bounce": "over-bounce 1s infinite alternate",
        "over-bounce-reverse": "over-bounce-reverse 1s infinite alternate",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
