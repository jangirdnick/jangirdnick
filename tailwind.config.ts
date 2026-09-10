import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['helveticaNeueMedium', 'sans-serif'],
        helveticaMedium: ['helveticaNeueMedium', 'sans-serif'],
        helveticaMediumItalic: ['helveticaNeueMediumItalic', 'sans-serif'],
        helveticaRoman: ['HelveticaNeueRoman', 'sans-serif'],
        poppinsSemiBoldItalic: ['PoppinsSemiBoldItalic', 'sans-serif'],
        poppinsMedium: ['PoppinsMedium', 'sans-serif'],
        poppinsRegular: ['PoppinsRegular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
