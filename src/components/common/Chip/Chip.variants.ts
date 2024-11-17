import { cva } from 'class-variance-authority';

export const ChipVariants = cva(`bg-primary rounded-md text-white cursor-default px-3 py-1`, {
  variants: {
    variant: {
      small: 'h-6 min-w-6 text-caption',
      medium: 'h-7 min-w-7 text-body4',
      large: 'h-8 min-w-8 text-body3',
    },
  },
  defaultVariants: {
    variant: 'medium',
  },
});
