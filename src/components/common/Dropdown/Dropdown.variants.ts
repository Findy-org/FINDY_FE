import { cva } from 'class-variance-authority';

export const DropdownVariants = cva(
  `flex items-center rounded-lg bg-white text-black p-3 active:bg-gray-50 transition-colors`,
  {
    variants: {
      state: {
        default: 'font-bold',
        expanded: 'w-full active:text-primary font-medium',
      },
    },
  }
);
