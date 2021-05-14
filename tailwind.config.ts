import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        nest: {
          50: '#f0f7f4',
          100: '#dceee6',
          200: '#b8dccb',
          300: '#8ac4ab',
          400: '#5aa688',
          500: '#3d8a6e',
          600: '#2f6f59',
          700: '#285948',
          800: '#23483b',
          900: '#1e3c32',
          950: '#0f221c',
        },
        alert: {
          soft: '#fef3c7',
          mid: '#f59e0b',
          hard: '#dc2626',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        nest: '0 12px 40px -16px rgba(30, 60, 50, 0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
