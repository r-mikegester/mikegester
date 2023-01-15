
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
    'node_modules/preline/dist/*.js',
  ],
  darkMode: "class", //media, class
  theme: {
    extend: {
      width: {
        sidebar: "300px",
        search: "400px",
      },
      rotate: {
        137: "137deg",
      },
      fontFamily: {
        lexend: "'Lexend', sans-serif",
      },

    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
    require('preline/plugin')
  ],
};
