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
          DEFAULT: '#0EA5E9',
          dark: '#0F172A',
          dark2: '#1E293B',
          mid: '#0F172A',
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
