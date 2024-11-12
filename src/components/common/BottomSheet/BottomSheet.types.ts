import { ComponentPropsWithoutRef, ReactNode } from 'react';

export type Props = ComponentPropsWithoutRef<'div'> & {
  /**
   * Indicates whether the BottomSheet is currently open.
   * @default false
   */
  isOpen: boolean;
  /**
   * Callback function that is called when the BottomSheet should close.
   */
  onClose?: VoidFunction;
  /**
   * The content to be displayed inside the BottomSheet.
   */
  children: ReactNode;
};

export type DragInfo = {
  delta: { x: number; y: number };
};
