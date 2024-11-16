import { memo } from 'react';

import { Icons } from '@/assets/icons';
import { useDropdown } from '@/hooks/common/useDropdown';

import { Props } from './Dropdown.types';
import { DropdownVariants } from './Dropdown.variants';

export const Dropdown = memo(({ selectedCategory, onSelectCategory, className }: Props) => {
  const { isOpen, handleToggle, handleSelect, categories } = useDropdown(onSelectCategory);

  const ArrowDownIcon = Icons.arrowDown;
  const ArrowUpIcon = Icons.arrowUp;

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        type="button"
        className={DropdownVariants({ state: 'default' })}
        onClick={handleToggle}
      >
        <div className="flex items-center">
          {selectedCategory}
          <span className="ml-2">
            {isOpen ? <ArrowUpIcon className="inline" /> : <ArrowDownIcon className="inline" />}
          </span>
        </div>
      </button>
      {isOpen && (
        <div className="absolute left-0 bg-white shadow-lg rounded-lg mt-0 w-full">
          {categories.map((category) => (
            <button
              key={category.name}
              type="button"
              className={DropdownVariants({ state: 'expanded' })}
              onClick={() => handleSelect(category)}
            >
              {category.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
});
