/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme') 


module.exports = {
  content:[
    //Or if using `src` directory:
    "./src/**/*.{js, ts, jsx, tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
        colors:{
          dark: '#1b1b1b',
          light: '#f5f5f5',
          primary: '#B63E96',
          primaryDark: '#58E6D9', // 80,230,217
      },
      animation:{
        'spin-slow': 'spin 3s linear infinite',
      },
      backgroundImage: {
        circularLight:'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 90px);'
      },
    },
  },
  plugins: [],
}
