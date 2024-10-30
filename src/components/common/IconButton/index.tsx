import { cn } from '@/lib/core';

import { Props } from './IconButton.types';

import { Icon } from '../Icon';

export const IconButton = ({ variant = 'default', name, isActive, className, ...props }: Props) => {
  return (
    <button
      className={cn(
        'p-3 rounded-full transition-colors border shadow-md shadow-gray-300 ',
        variant === 'bookmark'
          ? isActive
            ? 'border-primary'
            : 'border-gray-300'
          : ' [@media(hover:hover)]:hover:border-primary',
        className
      )}
      {...props}
    >
      <Icon
        name={name}
        color={variant === 'bookmark' ? (isActive ? 'primary' : 'gray') : 'primary'}
        className={cn(
          'w-6 h-6',
          variant === 'bookmark'
            ? isActive
              ? 'border-primary'
              : 'border-gray-300'
            : 'hover:border-primary'
        )}
      />
    </button>
  );
};
