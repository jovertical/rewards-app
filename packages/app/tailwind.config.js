let defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Neue Haas Unica', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      blue: '#0074BB',
      yellow: '#FFCF0D',
      gray: defaultTheme.colors.gray,
      white: defaultTheme.colors.white,
      black: defaultTheme.colors.black,
      transparent: defaultTheme.colors.transparent,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
