export type Props = {
  /**
   * Indicates whether the component is open or visible.
   * @type {boolean}
   */
  isOpen: boolean;

  /**
   * update the open/close state of the component.
   * @param {boolean}
   */
  setIsOpen: (value: boolean) => void;
};
