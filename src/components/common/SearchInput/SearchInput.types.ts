import { ComponentPropsWithoutRef } from 'react';

export type Props = {
  /**
   * The current value of the searchInput field.
   */
  value: string;
} & ComponentPropsWithoutRef<'input'>;
