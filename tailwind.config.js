const plugin = require('tailwindcss/plugin')
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;
const nameClass = require('tailwindcss/lib/util/nameClass').default;
const lodash = require('lodash');

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        ...require('tailwindcss/colors'),
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
        '17': '4.25rem',
        '76': '19rem',
        '100': '25rem',
        '110': '27.5rem',
      }
    },
  },
  variants: {
    extend: {
      padding: ['first', 'last'],
    },
  },
  plugins: [
      plugin(function({ addUtilities, theme, variants }) {
        const colors = lodash.omit(flattenColorPalette(theme('borderColor')), 'DEFAULT');

        const getProperties = (baseName, cssProperty) => {
          return lodash.fromPairs(lodash.map(colors, (value, modifier) => {
            return [nameClass(baseName, modifier), {[cssProperty]: value}]
          }));
        }

        addUtilities(getProperties('border-t', 'border-top-color'), variants('borderColor'));
        addUtilities(getProperties('border-r', 'border-right-color'), variants('borderColor'));
        addUtilities(getProperties('border-b', 'border-bottom-color'), variants('borderColor'));
        addUtilities(getProperties('border-l', 'border-left-color'), variants('borderColor'));
      }),
  ],
  corePlugins: {
    container: false
  }
}
