module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        ...require('tailwindcss/colors')
      },
      letterSpacing: {
        '2xl': '0.2em',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    container: false
  }
}
