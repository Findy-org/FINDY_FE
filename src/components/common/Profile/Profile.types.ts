import { BookmarkDetail } from '@/hooks/api/bookmarks/useBookMarkList';

export type Props = {
  /**
   * The bookmark item containing detailed information.
   */
  item: BookmarkDetail;
  /**
   * The ID of the currently selected item (optional).
   */
  selectedId?: number;
  /**
   * Callback function triggered when an item is selected.
   * @param id - The ID of the selected item.
   */
  onSelect: (id: number) => void;
  /**
   * Indicates whether this item is the last in the list.
   */
  isLast?: boolean;
  /**
   * Indicates whether the component is in editing mode.
   */
  isEditing?: boolean;
};
