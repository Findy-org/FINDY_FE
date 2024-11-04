import { cn } from '@/lib/core';

import { Props } from './IconButton.types';

import { Icon } from '../Icon';

export const IconButton = ({ name, isActive, className, ...props }: Props) => {
  return (
    <button
      className={cn(
        'p-3 rounded-full transition-colors border shadow-md shadow-gray-300 ',
        name === 'bookMark'
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
        color={name === 'bookMark' ? (isActive ? 'primary' : 'gray') : 'primary'}
        className={cn('w-6 h-6')}
      />
    </button>
  );
};
