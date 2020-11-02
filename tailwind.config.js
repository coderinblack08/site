module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        primary: '#1074E7',
      },
      backgroundOpacity: {
        96: '0.96',
      },
    },
  },
  variants: {},
  plugins: [],
};
