import React, { ComponentPropsWithoutRef } from 'react';

export type Props = {
  /**
   * The variant of the button.
   *  @default 'primary'
   */
  variant?: 'primary' | 'gray';
  /**
   * The height of the button.
   *  @default 'large'
   */
  size?: 'medium' | 'large';
  /**
   * Optional children for the button, typically a string.
   */
  children: React.ReactNode;
} & ComponentPropsWithoutRef<'button'>;
