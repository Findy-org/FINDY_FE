import { ComponentPropsWithoutRef } from 'react';

export type Props = {
  /**
   * category name to be displayed.
   */
  categoryName:
    | 'restaurant'
    | 'cafe'
    | 'bar'
    | 'shopping'
    | 'travel'
    | 'public'
    | 'hospital'
    | 'other';
} & ComponentPropsWithoutRef<'button'>;
