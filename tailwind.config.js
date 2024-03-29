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
      lightPurple: '#d22756',
      lightPurpleHover: '#db5277',
      lightSky: '#3b82f6',
      lightSkyHover: '#1d4ed8',
      indigo600: '#4f46e5',
      indigo500: '#6366f1',
    },
    fontFamily: {
      gilroy: ['Gilroy', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        texture: "url('./src/assets/icons/swirl.svg')",
        homeBackground: "url('./src/assets/images/HomeBackground.jpg')",
      },
    },
  },
  plugins: [],
};
