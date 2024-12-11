/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {
        'max': '1535px'
      },
      'xl': {
        'max': '1279px'
      },
      'lg': {
        'max': '1023px'
      },
      'lgTab': {
        'max': '991px'
      },
      'md': {
        'max': '767px'
      },
      'sm': {
        'max': '639px'
      },
    },
    extend: {
      colors: {
        'black': '#0c0c0c',
        'grey': '#8b8b8b',
        'lite-grey': '#f5f6f7',
        'blue': '#099aff',
        'orange': '#ff6800',
        'white': '#fff',
        'yellow': '#FFBA0C',
        'purple': '#7765e3',
        'green': '#00ca48',
        'lite-green': 'rgba(0, 202, 72, 0.2)',
      },
      spacing: {
        'cont': 'calc(100% - 2px)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}