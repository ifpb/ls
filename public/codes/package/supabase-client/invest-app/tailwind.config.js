module.exports = {
  darkMode: 'class',
  content: ['./**/*.{html,js}', 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {},
  },
  plugins: [require('preline/plugin')],
};
