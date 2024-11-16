import { useState, useCallback } from 'react';

import { Category } from '@/components/common/Dropdown/Dropdown.types';
import { DROPDOWN_CATEGORIES } from '@/constants/categories';

export const useDropdown = (onSelectCategory: (category: string) => void) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleSelect = useCallback(
    (category: Category) => {
      onSelectCategory(category.name);
      setIsOpen(false);
    },
    [onSelectCategory]
  );

  return {
    isOpen,
    handleToggle,
    handleSelect,
    categories: DROPDOWN_CATEGORIES,
  };
};
