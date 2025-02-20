import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandLight: {
          DEFAULT: '#83bdd5',
          100: '#f0f7fa',
          200: '#d1e6ef',
          300: '#b2d5e5',
          400: '#93c4da',
          500: '#83bdd5', // Same as DEFAULT
          600: '#669cb3',
          700: '#4a7b91',
          800: '#2d5a6f',
          900: '#11394d'
        },
        brandDark: {
          DEFAULT: '#242b34',
          100: '#ebeced',
          200: '#c6c9ce',
          300: '#a1a7af',
          400: '#7c8490',
          500: '#576271',
          600: '#424b59',
          700: '#242b34', // Same as DEFAULT
          800: '#1b2128',
          900: '#12161b'
        },
        secondary: {
          100: '#F5F7FA',
          200: '#ECEEF4',
          300: '#D2D5E2',
          400: '#B6BCCD',
          500: '#9EA5BD',
          600: '#79829F',
          700: '#626981',
          800: '#4B5162',
          900: '#343844',
          1000: '#1C1F25',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} satisfies Config;
