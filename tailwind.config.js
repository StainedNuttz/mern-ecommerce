module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs': '500px',
        '3xl': '1920px',
        '4xl': '2100px'
      },
      spacing: {
        
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      maxWidth: (theme) => ({ ...theme('spacing') })
    }
  },
  variants: {
    extend: {
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
