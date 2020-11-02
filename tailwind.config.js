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
      minHeight: {
        '4xl': '720px',
      },
      maxHeight: {
        '2xl': '32rem',
      },
      height: {
        84: '21rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
