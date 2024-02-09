/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
     sm: '480px',
     md: '768px', 
     lg: '976px',
     xl: '1440px' 
    },
    extend: {
       fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      },
      letterSpacing: {
        widest: '.3em'
      }
    },
  },
  plugins: [],
}
