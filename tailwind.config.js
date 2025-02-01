/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    backgroundColor: theme => theme('colors'),
    borderColor: theme => theme('colors'),
    fill: theme => theme('colors'),
    stroke: theme => theme('colors'),
    textColor: theme => theme('colors'),
    fontFamily: {
      poppinsBlack: ['Poppins-Black', 'sans-serif'],
      poppinsBold: ['Poppins-Bold', 'sans-serif'],
      poppinsExtraBold: ['Poppins-ExtraBold', 'sans-serif'],
      poppinsLight: ['Poppins-Light', 'sans-serif'],
      poppinsMedium: ['Poppins-Medium', 'sans-serif'],
      poppinsRegular: ['Poppins-Regular', 'sans-serif'],
      poppinsSemiBold: ['Poppins-SemiBold', 'sans-serif'],
      poppinsThin: ['Poppins-Thin', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      primary: '#1C1C1C',
      secondary: '#B0B0B0',
    },
    extend: {},
  },
  plugins: [],
};
