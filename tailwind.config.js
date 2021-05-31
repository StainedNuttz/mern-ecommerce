module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        'xs': '500px'
      },
      spacing: {
        
      },
      fontFamily: {
        sans: ['Noto Sans SC', 'sans-serif']
      },
      maxWidth: (theme) => ({ ...theme('spacing') })
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['disabled'],
      textColor: ['disabled']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
