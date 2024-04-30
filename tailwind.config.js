/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  corePlugins: {
    preflight: false,
  },
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'sm': '200px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        main: {
          DEFAULT: '#2B256D',

          // 100: '#feefd3',
          // 200: '#fcdea7',
          // 300: '#fbce7c',
          // 400: '#f9bd50',
          // 500: '#3FB984',
          // 600: '#c68a1d',
          // 700: '#956816',
          // 800: '#63450e',
          // 900: '#322307',
        },
      },
    },
  },
}
