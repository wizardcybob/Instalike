/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class', //pour la mise en place du darkmode
  theme: {
    extend: {
      colors: {
        'light-gray': '#718096',
        'darkblue': '#1A202C',
      },
    },
  },
  plugins: [],
}
