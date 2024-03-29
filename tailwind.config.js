module.exports = {
  content: [
      './dist/**/*.{html,js}',
  ],
  theme: {
    extend: {
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
      },
      fontFamily: {
        'code': ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
  corePlugins: {
    container: false
  }
}
