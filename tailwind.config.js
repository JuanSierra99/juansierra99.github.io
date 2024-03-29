/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      transitionDelay: {
        2500: "2500ms",
        10000: "10000ms",
      },
      transitionDuration: {
        2500: "2500ms",
        10000: "10000ms",
      },
    },
  },
  prefix: "tw-",
  plugins: [],
};
