import { ReactNode } from 'react';

export type Props = {
  /*
   * The content to be displayed on the left side.
   */
  left: ReactNode;
  /*
   * The content to be displayed on the middle side.
   */
  middle?: ReactNode;
  /*
   * The content to be displayed on the right side.
   */
  right?: ReactNode;
};
