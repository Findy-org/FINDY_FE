import { useState, useEffect, useCallback, RefObject } from 'react';

import { Category } from '@/components/common/Dropdown/Dropdown.types';
import { DROPDOWN_CATEGORIES } from '@/constants/categories';

export const useDropdown = (
  onSelectCategory: (category: string) => void,
  dropdownRef: RefObject<HTMLDivElement>
) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState<{
    top: number;
    left: number;
    width: number;
  }>({ top: 0, left: 0, width: 0 });

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

  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const updateDropdownPosition = () => {
        if (dropdownRef.current) {
          const rootDropdown = dropdownRef.current.getBoundingClientRect();
          setDropdownPosition({
            top: rootDropdown.bottom + window.scrollY,
            left: rootDropdown.left + window.scrollX,
            width: rootDropdown.width,
          });
        }
      };

      updateDropdownPosition();
      window.addEventListener('resize', updateDropdownPosition);

      return () => {
        window.removeEventListener('resize', updateDropdownPosition);
      };
    }
  }, [isOpen, dropdownRef]);

  return {
    isOpen,
    handleToggle,
    handleSelect,
    categories: DROPDOWN_CATEGORIES,
    dropdownPosition,
  };
};
