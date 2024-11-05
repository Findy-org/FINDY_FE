import { ComponentPropsWithoutRef } from 'react';

export type Props = {
  /**
   * The current value of the searchInput field.
   */
  value: string;
  /**
   * Function called when the search button is clicked.
   */
  onClick: () => void;
} & ComponentPropsWithoutRef<'input'>;
