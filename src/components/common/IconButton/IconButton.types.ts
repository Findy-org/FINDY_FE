import { ComponentPropsWithoutRef } from 'react';

import { IconName } from '@/assets/icons';

export type Props = {
  /**
   * The variant of the icon to be displayed on the button.
   */
  name: IconName;
  /**
   * The type of button to be rendered.
   * @default 'default'
   */
  variant?: 'default' | 'bookmark';
  /**
   * Indicates whether the button is currently active.
   * @default 'false'
   */
  isActive?: boolean;
  /**
   * Additional CSS classes for the button.
   * * @default ''
   */
  className?: string;
} & ComponentPropsWithoutRef<'button'>;
