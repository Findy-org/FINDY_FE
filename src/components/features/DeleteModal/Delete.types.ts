export type Props = {
  /**
   * The name or label of the item to be deleted.
   * @type {string}
   */
  item: string;
  /**
   * A callback function triggered when the delete action is confirmed.
   * @type {() => void}
   */
  onClickDelete: () => void;
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
