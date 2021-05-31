module.exports = {
  style: {
    postcss: {
      plugins: [
        require('@tailwindcss/forms'),
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}