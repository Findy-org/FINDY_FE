import { useState } from 'react';

import { SearchInput } from '@/components/common/SearchInput';
import { NaverMap } from '@/components/features/NaverMap';

export const Map = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (value: string) => {
    setSearchValue(value);
  };

  // TODO : 검색 API 연결
  return (
    <>
      <div className="relative w-full">
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 w-full max-w-md px-2">
          <SearchInput
            value={searchValue}
            onClick={() => {}}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        <NaverMap />
      </div>
    </>
  );
};
