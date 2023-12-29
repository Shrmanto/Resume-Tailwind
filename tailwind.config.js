/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        "poppins" : ['poppins'],
      },
      colors : {
        "orange" : '#FFB100',
        "dark-orange" : '#E78615',
        "dark" : '#262631',
      }
    },
  },
  plugins: [],
}

