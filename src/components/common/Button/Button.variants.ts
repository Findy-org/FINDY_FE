import { cva } from 'class-variance-authority';

export const ButtonVariants = cva(
  `flex items-center justify-center whitespace-nowrap select-none rounded-xl`,
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-white hover:bg-[#FF3131] disabled:opacity-50 disabled:cursor-not-allowed',
        gray: 'bg-gray-150 text-gray-950 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed',
      },
      size: {
        large: 'w-full h-14 text-xl font-medium',
        medium: 'w-[19rem] h-12 text-lg font-medium',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'large',
    },
  }
);
