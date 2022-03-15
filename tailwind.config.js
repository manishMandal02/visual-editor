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
          DEFAULT: '#1EB3F5',
          secondary: '#03DAC6',
          dark: '#121212',
          dark2: '#1D1D1D',
          gray: '#BABABA',
        },
      },
      borderWidth: {
        3: '3px',
      },
      transitionDuration: {
        400: '400ms',
      },
      width: {
        82: '21.4rem',
        98: '23.5rem',
        100: '64rem',
      },
      height: {
        100: '80rem',
        '1/12': '10%',
        '11/12': '90%',
      },
      spacing: {
        18: '12%',
      },
      screens: {
        ms: { max: '850px' },
      },
    },
  },
  plugins: [],
}

/*

*/
