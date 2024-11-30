import { colors } from './src/styles/theme/colors';

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-restricted-exports
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    colors,
    fontFamily: {
      sans: ['Pretendard'],
      pretendard: ['Pretendard'],
    },
    extend: {
      fontSize: {
        title1: '32px',
        title2: '28px',
        title3: '24px',
        body1: '20px',
        body2: '18px',
        body3: '16px',
        body4: '14px',
        caption: '12px',
      },
      lineHeight: {
        140: '140%',
      },
      zIndex: {
        modal: '100',
      },
      screens: {
        xs: '450px',
      },
    },
  },
  plugins: [],
};
