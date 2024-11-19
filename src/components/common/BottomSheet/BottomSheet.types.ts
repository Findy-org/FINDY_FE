import { ComponentPropsWithoutRef, ReactNode } from 'react';

export type Props = ComponentPropsWithoutRef<'div'> & {
  /**
   * Indicates whether the BottomSheet is currently open.
   * @default false
   */
  isOpen: boolean;
  /**
   * The content to be displayed inside the BottomSheet.
   */
  children: ReactNode;
  /**
   * Function to set the state of BottomSheet.
   */
  setIsOpen: (value: boolean) => void;
};

export type DragInfo = {
  delta: { x: number; y: number };
};
