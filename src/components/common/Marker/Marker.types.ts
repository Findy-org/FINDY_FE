import { ComponentPropsWithoutRef } from 'react';

import { MarkerCategory } from '@/constants/categories';

export type Props = {
  /**
   * category name to be displayed.
   */
  categoryName: MarkerCategory;
} & ComponentPropsWithoutRef<'button'>;
