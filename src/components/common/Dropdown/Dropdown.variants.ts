import { cva } from 'class-variance-authority';

export const DropdownVariants = cva(`flex items-center rounded-lg bg-white text-black p-3`, {
  variants: {
    state: {
      default: 'font-bold',
      expanded: 'w-full active:bg-gray-50 active:text-primary font-medium transition-colors',
    },
  },
});
