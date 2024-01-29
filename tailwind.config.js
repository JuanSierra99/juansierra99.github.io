/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      transitionDelay: {
        2500: "2500ms",
        12500: "12500ms",
      },
      transitionDuration: {
        2500: "2500ms",
        12500: "12500ms",
      },
    },
  },
  prefix: "tw-",
  plugins: [],
};
