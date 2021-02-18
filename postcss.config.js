module.exports = ({env}) => ({
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
        env === 'production' ? require('cssnano') : false,
    ]
})
