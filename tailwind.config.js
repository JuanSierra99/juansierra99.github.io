/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      transitionDelay: {
        2000: "2000ms",
      },
      transitionDuration: {
        2000: "2000ms",
      },
    },
  },
  prefix: "tw-",
  plugins: [],
};
