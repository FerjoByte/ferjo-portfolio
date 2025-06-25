/** @type {import('tailwindcss').Config} */
export const theme = {
  extend: {
    fontFamily: {
      heading: ['K2D', 'sans-serif'],
    },
  },
};
export const content = [
  './app/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
];
export const plugins = [];