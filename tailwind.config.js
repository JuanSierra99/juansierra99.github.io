/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      transitionDelay: {
        2500: "2000ms",
      },
      transitionDuration: {
        2500: "2000ms",
      },
    },
  },
  prefix: "tw-",
  plugins: [],
};
