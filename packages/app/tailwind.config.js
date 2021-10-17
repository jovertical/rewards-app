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
      yellow: {
        lighter: '#FFE270',
        light: '#FFDA47',
        DEFAULT: '#FFCF0D',
        dark: '#F5C400',
        darker: '#CCA300',
      },
      green: {
        lightest: defaultTheme.colors.green[100],
        lighter: defaultTheme.colors.green[200],
        light: defaultTheme.colors.green[300],
        DEFAULT: defaultTheme.colors.green[500],
        dark: defaultTheme.colors.green[700],
        darker: defaultTheme.colors.green[800],
        darkest: defaultTheme.colors.green[900],
      },
      red: {
        lightest: defaultTheme.colors.red[100],
        lighter: defaultTheme.colors.red[200],
        light: defaultTheme.colors.red[300],
        DEFAULT: defaultTheme.colors.red[500],
        dark: defaultTheme.colors.red[700],
        darker: defaultTheme.colors.red[800],
        darkest: defaultTheme.colors.red[900],
      },
      gray: {
        lightest: defaultTheme.colors.gray[100],
        lighter: defaultTheme.colors.gray[200],
        light: defaultTheme.colors.gray[300],
        DEFAULT: defaultTheme.colors.gray[500],
        dark: defaultTheme.colors.gray[700],
        darker: defaultTheme.colors.gray[800],
        darkest: defaultTheme.colors.gray[900],
      },
      white: defaultTheme.colors.white,
      black: defaultTheme.colors.black,
      transparent: defaultTheme.colors.transparent,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
