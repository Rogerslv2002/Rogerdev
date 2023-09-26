/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'min': '1600px'},
  
      'xl': {'max': '1600px'},

      'lg': {'max': '1300px'},

      'md': {'max': '1000px'},

      'sm': {'max': '700px'},

      'xs': {'max': '400px'},
    },
    extend: {},
  },
  plugins: [],
}

