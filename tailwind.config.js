module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/components/**/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#14b8a6',
          secondary: '#06b6d4',
          dark: '#121212',
          dark2: '#1D1D1D',
          gray: '#f3f4f6',
        },
      },
      borderWidth: {
        3: '3px',
      },
      transitionDuration: {
        400: '400ms',
      },
      width: {
        18: '4.65rem',
        82: '21.4rem',
        98: '25rem',
        100: '64rem',
      },
      height: {
        100: '80rem',
        '1/12': '7%',
        '11/12': '93%',
      },
      spacing: {
        18: '12%',
      },
      screens: {
        ms: { max: '850px' },
      },
      scale: {
        135: '1.35',
      },
    },
  },
  plugins: [],
}

/*

*/
