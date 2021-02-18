const plugin = require('tailwindcss/plugin')
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;
const nameClass = require('tailwindcss/lib/util/nameClass').default;
const lodash = require('lodash');

module.exports = plugin(function({ addUtilities, theme, variants }) {
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
})