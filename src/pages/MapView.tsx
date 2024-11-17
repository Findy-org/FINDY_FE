import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { SearchInput } from '@/components/common/SearchInput';
import { SideMenu } from '@/components/common/SideMenu';
import { NaverMap } from '@/components/features/NaverMap';
import { useNaverSearchResult } from '@/hooks/api/search/useNaverSearchResult';
import { useInput } from '@/hooks/common/useInput';
import { useMapState } from '@/hooks/common/useMapState';
import { useMarkers } from '@/hooks/common/useMarkers';
import { Place } from '@/types/naver';

export const MapView = () => {
  const navigate = useNavigate();
  const { addMarker, clearMarkers } = useMarkers();
  const { state: searchValue, onChange, onClickReset } = useInput();
  const { initialCenter, zoomLevel, isCurrent, updateLocation, resetCurrentLocation } =
    useMapState();
  const [isInputDisabled, setIsInputDisabled] = useState(false);

  const location = useLocation();
  const data = location.state?.data;

  useEffect(() => {
    if (data && data.places) {
      clearMarkers();
      data.places.forEach((marker: Place) => {
        const markerData = {
          ...marker,
          category:
            typeof marker.category === 'string' ? marker.category : marker.category.majorCategory,
        };
        addMarker(markerData);
      });
    }
  }, [addMarker, clearMarkers, data]);

  const { refetch } = useNaverSearchResult(searchValue);

  const handleSearch = async () => {
    setIsInputDisabled(true);
    resetCurrentLocation();
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

  const handleCurrentLocation = useCallback(() => {
    clearMarkers();
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      updateLocation(latitude, longitude, 18);
    });
  }, [clearMarkers, updateLocation]);

  return (
    <>
      <div className="relative">
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 w-full max-w-md px-2">
          <SearchInput
            value={searchValue}
            disabled={isInputDisabled}
            onClick={() => (isInputDisabled ? handleReset() : handleSearch())}
            onChange={onChange}
          />
        </div>
        <NaverMap initialCenter={initialCenter} initialZoom={zoomLevel} isCurrent={isCurrent} />
        <div className="absolute bottom-10 right-4 flex flex-col gap-2 justify-center items-center">
          <SideMenu.Group>
            <SideMenu position="right" variant="gps" onClick={() => handleCurrentLocation()} />
            <SideMenu position="right" variant="link" onClick={() => navigate('/link')} />
            <SideMenu position="right" variant="emptyBookMark" onClick={() => {}} />
          </SideMenu.Group>
        </div>
      </div>
    </>
  );
};
