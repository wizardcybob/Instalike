/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colords: {
        'light-gray': '#718096',
      },
      boxShadow: {
        'post': '0 0 20px 1px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}
