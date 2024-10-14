/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard'],
      },
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
    },
  },
  plugins: [],
};
