import { forwardRef } from 'react';

import { cn } from '@/lib/core';

import { Props } from './Button.types';
import { ButtonVariants } from './Button.variants';

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant, size, children, ...props }, ref) => {
    return (
      <button type="button" className={cn(ButtonVariants({ variant, size }))} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);
