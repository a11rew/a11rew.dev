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
    },
  },
  plugins: [],
};
