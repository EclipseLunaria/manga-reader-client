module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      main: ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        secondary: 'rgb(var(--secondary-background-rgb))',
        primary: 'rgb(var(--primary-background-rgb))',
        accent: 'rgb(var(--accent-background-rgb))',
        accentBackground: 'rgb(var(--accent-background-10-rgb))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
