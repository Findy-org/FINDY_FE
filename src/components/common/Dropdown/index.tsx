import { useRef } from 'react';

import { Icon } from '@/components/common/Icon';
import { useDropdown } from '@/hooks/common/useDropdown';
import { cn } from '@/lib/core';

import { Props } from './Dropdown.types';
import { DropdownVariants } from './Dropdown.variants';

import { Portal } from '../Portal';

export const Dropdown = ({ selectedCategory, onSelectCategory, className }: Props) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isOpen, handleToggle, handleSelect, categories, dropdownPosition } = useDropdown(
    onSelectCategory,
    dropdownRef
  );

  return (
    <div ref={dropdownRef} className={cn('relative inline-block', className)}>
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
      <Portal isOpen={isOpen}>
        <div
          className="absolute bg-white shadow-lg rounded-lg mt-0 z-modal max-h-[calc(4*2.6rem)] overflow-y-auto scrollbar-hide"
          style={{
            top: dropdownPosition.top,
            left: dropdownPosition.left,
            width: dropdownPosition.width,
          }}
        >
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
      </Portal>
    </div>
  );
};
