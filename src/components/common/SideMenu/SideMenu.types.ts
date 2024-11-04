import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { sideMenuTooltip } from '@/constants/sideMenuItem';

export type Props = {
  /**
   * corresponding to a key in the sideMenuTooltip object.
   */
  variant: keyof typeof sideMenuTooltip;
  /**
   * The position of the tooltip relative to the button.
   * @default 'left'
   */
  position?: 'left' | 'right';
  /**
   * Additional CSS classes for custom styling.
   */
  className?: string;
} & ComponentPropsWithoutRef<'button'>;

export type GroupProps = {
  /**
   * The position of the tooltip relative to the button.
   * @default 'left'
   */
  position?: 'left' | 'right';
  /**
   *  This allows for flexible composition of the group.
   */
  children: ReactNode;
} & ComponentPropsWithoutRef<'div'>;
