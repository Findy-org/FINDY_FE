import { ReactNode } from 'react';

export type Props = {
  /*
   * The content to be displayed on the left side, required.
   */
  left: ReactNode;
  /*
   * The content to be displayed on the middle side, required.
   */
  middle?: ReactNode;
  /*
   * The content to be displayed on the right side, required.
   */
  right?: ReactNode;
};
