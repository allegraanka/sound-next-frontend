module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      debugScreens: {
        position: ['top', 'left'],
      },
      container: {
        center: true,
      },
      colors: {
        red: {
          light: '#F27C7C',
          dark: '#CC2727'
        },
        'black': '#262627',
        'white': '#F5F5F5',
        'true-black': '#000000',
        'true-white': '#FFFFFF'
      },
      fontFamily: {
        sans: ['Palanquin', 'sans-serif'],
        cursive: ['Staatliches', 'cursive']
      },
      extend: {},
    },
    plugins: [
      require('tailwindcss-debug-screens'),
      require('@tailwindcss/forms'),
    ],
  }