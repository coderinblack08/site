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
      boxShadow: {
        'outline-blue': '0 0 0 3px rgba(164, 202, 254, .45)',
      },
      minHeight: {
        '3xl': '42rem',
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
