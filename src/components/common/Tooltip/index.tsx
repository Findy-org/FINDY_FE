import { motion as m } from 'framer-motion';

import { cn } from '@/lib/core';

import { Props } from './Tooltip.types';

import { Icon } from '../Icon';

export const Tooltip = ({ message, position = 'left', className = '' }: Props) => {
  return (
    <m.div
      className={cn(
        'absolute top-1/2 -translate-y-1/2 z-10',
        position === 'left' ? 'left-full ml-2' : 'right-full mr-2',
        className
      )}
    >
      <div className="relative">
        <Icon name="bubble" size={130} className={`${position === 'left' && 'rotate-180'}`} />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          text-sm text-gray-700 whitespace-nowrap text-center ${position === 'left' ? 'pl-2' : 'pr-2'}`}
        >
          {message}
        </div>
      </div>
    </m.div>
  );
};
