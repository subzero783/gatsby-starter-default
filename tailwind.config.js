/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      rubik: ['Rubik', 'Helvetica', 'Arial', 'sans-serif'],
      roboto: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
    },
  },
  plugins: [],
}
