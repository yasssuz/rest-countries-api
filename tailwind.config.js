module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      gray: {
        light: '#2B3844',
        dark: '#202C36'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
