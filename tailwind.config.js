export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      red: '#F21E1E',
      white: '#fcfcfc',
      black: '#272d2f',
      gray: '#b9b9b9',
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
