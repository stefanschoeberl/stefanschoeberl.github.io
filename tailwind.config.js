const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
      './site/**/*.html',
      './site/**/*.js',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        black: colors.black,
        white: colors.white,
        rose: colors.rose,
        pink: colors.pink,
        fuchsia: colors.fuchsia,
        purple: colors.purple,
        violet: colors.violet,
        indigo: colors.indigo,
        blue: colors.blue,
        sky: colors.sky,
        cyan: colors.cyan,
        teal: colors.teal,
        emerald: colors.emerald,
        green: colors.green,
        lime: colors.lime,
        yellow: colors.yellow,
        amber: colors.amber,
        orange: colors.orange,
        red: colors.red,
        warmGray: colors.warmGray,
        trueGray: colors.trueGray,
        gray: colors.gray,
        coolGray: colors.coolGray,
        blueGray: colors.blueGray,
      },
      letterSpacing: {
        '2xl': '0.2em',
      },
      boxShadow: {
        'card': '0 5px 15px rgba(0,0,0,.08)',
        'card-elevated': '0 14px 25px rgba(0, 0, 0, 0.16)',
      },
      scale: {
        '101': '1.01',
      },
      spacing: {
        '6.5': '1.625rem',
        '17': '4.25rem',
        '76': '19rem',
        '100': '25rem',
        '110': '27.5rem',
      }
    },
  },
  variants: {},
  plugins: [
      require('./tailwindcss-plugins/border'),
  ],
  corePlugins: {
    container: false
  }
}
