module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      container: (theme) => ({
        center: true,
        padding: {
          DEFAULT: theme('spacing.4'),
          sm: theme('spacing.5'),
          lg: theme('spacing.6'),
          xl: theme('spacing.8'),
        },
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1024px',
        },
      }),
    },
  },
  plugins: [],
};
