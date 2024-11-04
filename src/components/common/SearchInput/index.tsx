import { forwardRef } from 'react';

import { Props } from './SearchInput.types';

import { Icon } from '../Icon';

export const SearchInput = forwardRef<HTMLInputElement, Props>(
  ({ value, onClick, ...props }, ref) => {
    return (
      <div className="flex flex-col items-start w-full">
        <div className="relative flex items-center w-full">
          <input
            value={value}
            ref={ref}
            placeholder="검색어를 입력해주세요."
            className="w-full h-11 text-body3 bg-white pl-5 pr-10 rounded-lg border focus:outline-none border-primary transition-colors"
            {...props}
          />
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={onClick}
          >
            <Icon name="search" size={20} />
          </div>
        </div>
      </div>
    );
  }
);
