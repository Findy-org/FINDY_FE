import { ComponentPropsWithoutRef } from 'react';

import { IconName } from '@/assets/icons';

export type Props = {
  /**
   * The variant of the icon to be displayed on the button.
   */
  name: IconName;
  /**
   * Indicates whether the button is currently active.
   * @default 'false'
   */
  isActive?: boolean;
  /**
   * Additional CSS classes for the button.
   * @default ''
   */
  className?: string;
} & ComponentPropsWithoutRef<'div'>;
