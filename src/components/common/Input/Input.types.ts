import { ChangeEventHandler, ComponentPropsWithoutRef } from 'react';

export type Props = {
  /*
   * The current value of the input field.
   */
  value: string;
  /*
   * The current value of the input field.
   */
  onChange: ChangeEventHandler<HTMLInputElement>;
  /*
   * The current value of the input field.
   */
  onClickReset: VoidFunction;
  /*
   * indicating whether the input value is valid or not.
   */
  isValid: boolean;
} & ComponentPropsWithoutRef<'input'>;
