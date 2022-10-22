/** @type {Tailwind.ConfigJS} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
      extend: {
          colors: {
              gray: {
                700: '#131313',
                800: '#171717'
              }
          },
      },
  },
  plugins: [],
};