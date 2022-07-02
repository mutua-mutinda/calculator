/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily:{
      'digital': ['Ds-Digital']
    },
    extend: {
      boxShadow: {
        '3xl': '-5px -5px 10px #FFFFFF, 5px 5px 10px rgba(55, 84, 170, 0.4)',
        '4xl': '5px 5px 10px #000000, -5px -5px 10px rgba(20, 21, 24, 0.4)',
        '5xl':'-5px -5px 10px #FFFFFF, 5px 5px 10px rgba(55, 84, 170, 0.1)',
        '6xl': '5px 5px 10px #000000, -5px -5px 10px rgba(20, 21, 24, 0.1)',
        '7xl': '-5px -5px 10px #FFFFFF, 5px 5px 10px rgba(21, 101, 192, 0.4)'

      },
      backgroundImage: {
        'dark-gradient': "linear-gradient(180deg, #1A1B1F 0%, #17181C 100%);",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
