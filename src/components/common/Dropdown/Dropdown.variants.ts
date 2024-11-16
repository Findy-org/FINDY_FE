import { cva } from 'class-variance-authority';

export const DropdownVariants = cva(
  `flex items-center rounded-lg bg-white text-black font-pretendard p-3`,
  {
    variants: {
      state: {
        default: 'hover:bg-secondary hover:text-primary font-bold transition-colors',
        expanded: 'w-full hover:bg-secondary hover:text-primary font-medium transition-colors',
      },
    },
  }
);
