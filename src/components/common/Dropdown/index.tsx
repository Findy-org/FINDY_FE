import { Icon } from '@/components/common/Icon';
import { useDropdown } from '@/hooks/common/useDropdown';
import { cn } from '@/lib/core';

import { Props } from './Dropdown.types';
import { DropdownVariants } from './Dropdown.variants';

export const Dropdown = ({ selectedCategory, onSelectCategory, className }: Props) => {
  const { isOpen, handleToggle, handleSelect, categories } = useDropdown(onSelectCategory);

  return (
    <div className={cn('relative inline-block', className)}>
      <button
        type="button"
        className={DropdownVariants({ state: 'default' })}
        onClick={handleToggle}
      >
        <div className="flex items-center">
          {selectedCategory}
          <span className="ml-2">
            {isOpen ? <Icon name="arrowUp" size={10} /> : <Icon name="arrowDown" size={10} />}
          </span>
        </div>
      </button>
      {isOpen && (
        <div className="absolute left-0 bg-white shadow-lg rounded-lg mt-0 w-full z-modal">
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
};
