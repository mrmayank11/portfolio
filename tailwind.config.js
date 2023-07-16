// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateY(15px)' },
          '50%': { transform: 'translateY(-15px)' },
          // '100%': { transform: 'translateY(15px)' },
        },
        text: {
          to: {
            'color': '#50d71e'
          }
          // '0%, 100%': {
          //   'background-size': '200% 200%',
          //   'background-position': 'left center',
          // },
          // '50%': {
          //   'background-size': '200% 200%',
          //   'background-position': 'right center',
          // },
        },
      },
      animation: {
        'waving-hand': 'wave 3s infinite ease alternate',
        text: 'text 0.5s ease forwards',
      },
    },
  },
  plugins: [],
};

