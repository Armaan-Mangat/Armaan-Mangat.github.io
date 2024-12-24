const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        onyx: '#403F4C',
        raisin: '#2C2B3C',
        gunmetal: '#1B2432',
        richblack: '#121420',
        indianred: '#B76D68',
      },
    },
  },
  plugins: [],
};
