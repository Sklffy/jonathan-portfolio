/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        "200%": "200% 200%",
      },
      animation: {
        "gradient-x": "gradient-x 4s ease infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-position": "left center",
          },
          "50%": {
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
}
