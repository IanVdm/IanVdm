import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 60px rgba(96, 165, 250, 0.18)',
      },
      colors: {
        surface: '#080b12',
        accent: '#58a6ff',
        accentSoft: '#2a4365',
      },
    },
  },
  plugins: [],
};

export default config;
