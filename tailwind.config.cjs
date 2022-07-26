/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        orange: {
          100: '#FB8404',
          200: '#b14e07',
          300: '#FE1E14',
        },
      },
    },
  },
  plugins: [],
};
