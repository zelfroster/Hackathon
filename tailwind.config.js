/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
        colors: {
            softBlue: 'hsl(215, 51%, 70%)',
            veryDarkBlue: 'hsl(217, 54%, 11%)',
            black: 'hsl(0, 0%, 0%)',
            white: 'hsl(0, 0%, 100%)',
        }
    },
  },
  plugins: [],
}
