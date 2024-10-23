import { ReactNode } from 'react';

export type Props = {
  /**
   * Indicates whether the modal is currently open.
   * @default false
   */
  isOpen: boolean;
  /**
   * optional, can be used to handle modal closing or other actions.
   */
  onClickOutside?: VoidFunction;
  /**
   * The content to be displayed inside the modal.
   */
  children: ReactNode;
};
