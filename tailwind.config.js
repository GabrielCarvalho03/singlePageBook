/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      height:{
      '400': '26.983rem'
      },
      colors:{
        'primary':'#19014E',
        'berge' : '#F0DCBE',
        'blueText': '#0B1234'
      },
      letterSpacing: {
        '1': '0.175rem',
        'sm': '0.21rem',
        'xs': '0.123rem'
      }
    },
  },
  plugins: [],
}

