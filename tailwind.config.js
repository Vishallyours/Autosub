/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navbarColor: '#D9D9D9',
        textColor:'#1E1E1E',
      },
      fontFamily: {
        custom: ['CustomFont',],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        '108' : '27rem',
        '120' : '30rem',
        '132' : '33rem',
        '144' : '36rem',
      },
      width:{
        '108' : '27rem',
        '120' : '30rem',
        '132' : '33rem',
        '144' : '36rem',
        '156' : '39rem',
        '180' : '45rem',
      },
      screens:{
        'xs' : '220px',
      },
    },
  },
  plugins: [],
};
