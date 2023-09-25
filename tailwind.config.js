/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,html,js}",
    "./src/components/**/*.{vue,html,js}",
    "./index.html",
],
  theme: {
    fontFamily: {
      'cabin': ['Cabin', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'app-background': "url('/background.jpg')"
      }
    },
  },
  plugins: [],
}

