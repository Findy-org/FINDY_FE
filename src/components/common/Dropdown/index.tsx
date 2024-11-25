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
        <div className="flex items-center justify-between w-16">
          <span>{selectedCategory}</span>
          <Icon name={isOpen ? 'arrowUp' : 'arrowDown'} size={10} />
        </div>
      </button>
      {isOpen && (
        <div className="absolute bg-white w-[5.5rem] shadow-lg rounded-lg mt-0 z-modal max-h-[10.6rem] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded">
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
