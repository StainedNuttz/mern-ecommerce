module.exports = {
  purge: ['src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        'xs': '500px'
      },
      fontFamily: {
        sans: ['Noto Sans SC', 'sans-serif']
      },
      maxWidth: (theme) => ({ ...theme('spacing') })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ]
}
