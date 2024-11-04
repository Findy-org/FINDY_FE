export type Props = {
  /**
   * The message to be displayed in the tooltip.
   */
  message: string;
  /**
   * The position of the tooltip relative to the button.
   * @default 'left'
   */
  position?: 'left' | 'right';
  /**
   * Additional CSS classes for custom styling of the tooltip.
   */
  className?: string;
};
