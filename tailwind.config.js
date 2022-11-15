/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class', // false, 'class', 'media'
  // ...
  content: [ "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}","./node_modules/flowbite/**/*.js"], 
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
