import { Place } from '@/types/naver';

export type Props = {
  /**
   * An object containing information about the place.
   */
  place: Place;
  /**
   * Indicates whether the item is currently selected.
   */
  isSelected: boolean;
  /**
   * Indicates whether the item is in editing mode.
   */
  isEditing: boolean;
  /**
   * A function to toggle the selection state of the item.
   */
  onToggleSelect: (value: number) => void;
  /**
   * Indicates whether this is the last item in the list.
   */
  isLast: boolean;
};
