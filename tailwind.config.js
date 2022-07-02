/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'primary':['Mulish', 'sans-serif']
    },


    extend: {
      colors: {
        'primary': "#072C9A",
        "secondary": "#03CCF4",
      }

    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}