import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // KLEERO brand palette — warm editorial F&B
        cream: {
          50: '#FCFAF5',
          100: '#FAF7F2',
          200: '#F2EDE2',
          300: '#E7E0CF',
        },
        forest: {
          50: '#EAF2EE',
          100: '#C5D9CD',
          400: '#3F6B58',
          500: '#1F4E3D',
          600: '#143A2C',
          700: '#0E2C22',
          900: '#081A14',
        },
        terracotta: {
          400: '#E68A5A',
          500: '#D26A3C',
          600: '#B5552B',
        },
        ink: {
          900: '#1A1F1B',
          700: '#3B423D',
          500: '#5A6259',
          300: '#9AA29C',
        },
        line: '#E7E2D8',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-dmsans)', '-apple-system', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(20, 58, 44, 0.04), 0 8px 24px rgba(20, 58, 44, 0.06)',
        'lift': '0 4px 12px rgba(20, 58, 44, 0.08), 0 24px 48px rgba(20, 58, 44, 0.12)',
        'inner-line': 'inset 0 0 0 1px rgba(20, 58, 44, 0.08)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fadeIn 0.6s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
