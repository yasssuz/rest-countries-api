module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    textColor: theme => theme('colors'),
    textColor: {
      'white': '#FFFFFF',
      'darkest': '#111517',
    },
    colors: {
      'white': '#FFFFFF',

      gray: {
        whitish: '#F2F2F2',
        light: '#2B3844',
        dark: '#202C36'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
