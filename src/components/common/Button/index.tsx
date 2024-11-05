import { forwardRef } from 'react';

import { cn } from '@/lib/core';

import { Props } from './Button.types';
import { ButtonVariants } from './Button.variants';

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant, size, className, children, ...props }, ref) => {
    return (
      <button
        type="button"
        className={cn(ButtonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
