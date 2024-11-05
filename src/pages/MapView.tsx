import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SearchInput } from '@/components/common/SearchInput';
import { SideMenu } from '@/components/common/SideMenu';
import { NaverMap } from '@/components/features/NaverMap';

export const MapView = () => {
  const navigate = useNavigate();
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
        <div className="absolute bottom-14 right-4 flex flex-col gap-2 justify-center items-center">
          <SideMenu.Group>
            <SideMenu position="right" variant="gps" onClick={() => {}} />
            <SideMenu position="right" variant="link" onClick={() => navigate('/link')} />
            <SideMenu position="right" variant="emptyBookMark" onClick={() => {}} />
          </SideMenu.Group>
        </div>
      </div>
    </>
  );
};
