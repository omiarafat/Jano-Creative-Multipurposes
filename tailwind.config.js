/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'gordita': ['font-bold', 'font-medium',],
      'MyFont': ['"My Font"', 'serif'],
      'Gordita': ['Gordita'],
      // Ensure fonts with spaces have " " surrounding it.
    },
  },
  plugins: [],
}

