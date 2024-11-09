import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SearchInput } from '@/components/common/SearchInput';
import { SideMenu } from '@/components/common/SideMenu';
import { NaverMap } from '@/components/features/NaverMap';
import { useNaverSearchResult } from '@/hooks/api/search/useNaverSearchResult';
import { useInput } from '@/hooks/common/useInput';
import { useMarkers } from '@/hooks/common/useMarkers';
import { Place } from '@/types/naver';

export const MapView = () => {
  const navigate = useNavigate();
  const { addMarker, clearMarkers } = useMarkers();
  const { state: searchValue, onChange, onClickReset } = useInput();
  const [isInputDisabled, setIsInputDisabled] = useState(false);

  const { refetch } = useNaverSearchResult(searchValue);

  const handleSearch = async () => {
    setIsInputDisabled(true);
    const result = await refetch();
    const newData = result?.data?.data.items;

    newData?.forEach((marker: Place) => {
      const markerData = {
        ...marker,
        title: marker.title.replace(/<[^>]+>/g, ''),
      };
      addMarker(markerData);
    });
  };

  const handleReset = () => {
    onClickReset();
    clearMarkers();
    setIsInputDisabled(false);
  };

  return (
    <>
      <div className="relative w-full">
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 w-full max-w-md px-2">
          <SearchInput
            value={searchValue}
            disabled={isInputDisabled}
            onClick={() => (isInputDisabled ? handleReset() : handleSearch())}
            onChange={onChange}
          />
        </div>
        <NaverMap />
        <div className="absolute bottom-24 right-4 flex flex-col gap-2 justify-center items-center">
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
