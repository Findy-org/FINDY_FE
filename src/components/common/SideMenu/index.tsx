import { sideMenuTooltip } from '@/constants/sideMenuItem';
import { cn } from '@/lib/core';

import { GroupProps, Props } from './SideMenu.types';

import { IconButton } from '../IconButton';
import { Tooltip } from '../Tooltip';

export const SideMenu = ({ variant, position = 'left', className = '', ...props }: Props) => {
  return (
    <button type="button" className="relative" {...props}>
      <IconButton name={variant} className={cn('peer', className)} />
      <Tooltip
        message={sideMenuTooltip[variant]}
        position={position}
        className="invisible opacity-0 transition-all duration-200 [@media(hover:hover)]:peer-hover:visible [@media(hover:hover)]:peer-hover:opacity-100"
      />
    </button>
  );
};

const SideMenuGroup = ({ position = 'left', children, ...props }: GroupProps) => {
  return (
    <div
      className={cn(
        `w-fit wrap flex flex-col gap-4 ${position === 'left' ? 'left-4' : 'right-4'}         `
      )}
      {...props}
    >
      {children}
    </div>
  );
};

SideMenu.Group = SideMenuGroup;
