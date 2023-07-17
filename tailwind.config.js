export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      red: '#F21E1E',
      white: '#fcfcfc',
      black: '#272d2f',
      fullBlack: '#000000',
      gray: '#b9b9b9',
      cyan: '#0E7490',
      gray500: '#6B7280',
      lightGray: '#F1F5F9',
      purple400: '#C084FC',
      blue400: '#60A5FA',
      red400: '#F77171',
      red500: '#EF4444',
    },
    fontFamily: {
      gilroy: ['Gilroy', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        texture: "url('./src/assets/icons/swirl.svg')",
      },
    },
  },
  plugins: [],
};
