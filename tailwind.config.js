module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        zomato:
        {
          50: '#edf0fd',
          100: '#ced3e5',
          200: '#afb6cf',
          300: '#9099bb',
          400: '#707ba7',
          500: '#57628e',
          600: '#444c6f',
          700: '#303650',
          800: '#1c2132',
          900: '#080b17',
        }
      },
      spacing: {
        '18px': '4.5rem'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
