import { ComponentPropsWithoutRef } from 'react';

export type Props = {
  /**
   * The currently selected category to be displayed.
   */
  selectedCategory: string;
  /**
   * Callback function when a category is selected.
   */
  onSelectCategory: (category: string) => void;
  /**
   * Optional additional class names for customization.
   */
  className?: string;
} & ComponentPropsWithoutRef<'div'>;

export type Category = {
  /**
   * The unique name of the category.
   */
  name: string;
};
