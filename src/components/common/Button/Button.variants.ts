import { cva } from 'class-variance-authority';

// TODO : hover, disable 됐을 경우 색상 추가
export const ButtonVariants = cva(
  `flex items-center justify-center whitespace-nowrap select-none rounded-xl`,
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white disabled:opacity-50 disabled:cursor-not-allowed',
        gray: 'bg-gray-100 text-gray-950 disabled:opacity-50 disabled:cursor-not-allowed',
      },
      size: {
        large: 'w-full h-14 text-xl font-medium',
        medium: 'w-72 h-12 text-lg font-medium',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);
