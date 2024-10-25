import { ComponentPropsWithoutRef } from 'react';

export type Props = {
  /*
   * The current value of the input field.
   */
  value: string;
  /*
   * Function to reset the input value to its initial state.
   */
  onClickReset: VoidFunction;
  /*
   * Indicates whether the current input value is valid.
   */
  isValid: boolean;
} & ComponentPropsWithoutRef<'input'>;
