import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { BottomSheet } from '@/components/common/BottomSheet';
import { SearchInput } from '@/components/common/SearchInput';
import { SideMenu } from '@/components/common/SideMenu';
import { BottomSheetContent } from '@/components/features/BottomSheetContent/BottomSheetContent';
import { NaverMap } from '@/components/features/NaverMap';
import { YoutubeResponse } from '@/hooks/api/link/useYoutubePlace';
import { useNaverSearchResult } from '@/hooks/api/search/useNaverSearchResult';
import { useInput } from '@/hooks/common/useInput';
import { useMapData } from '@/hooks/common/useMapData';
import { useMapState } from '@/hooks/common/useMapState';
import { useMapStorage } from '@/hooks/common/useMapStorage';
import { useMarkers } from '@/hooks/common/useMarkers';
import { Place } from '@/types/naver';

export const MapView = () => {
  const navigate = useNavigate();
  const [isInputDisabled, setIsInputDisabled] = useState(false);

  const { state, setState } = useMapData<Place[] | YoutubeResponse>();
  const { addMarker, clearMarkers } = useMarkers();
  const { state: searchValue, onChange, onClickReset } = useInput();
  const { refetch } = useNaverSearchResult(searchValue);
  const { getStoredMapData } = useMapStorage();

  const { initialCenter, zoomLevel, isCurrent, updateLocation, resetCurrentLocation } =
    useMapState();

  const location = useLocation();
  const extractedData = location.state?.data;

  const handleMarkers = useCallback(
    (places: Place[]) => {
      clearMarkers();
      places?.forEach(addMarker);
    },
    [clearMarkers, addMarker]
  );
  useEffect(() => {
    if (!state.type && !state.data) {
      const { data: storedData, type: storedType } = getStoredMapData();
      setState({ data: storedData, type: storedType });

      if (storedData && storedType === 'search') handleMarkers(storedData);
      if (storedData && storedType === 'extract')
        handleMarkers(storedData.places.length > 0 ? storedData.places : []);
    }
  }, [handleMarkers, state.type, state.data, setState, getStoredMapData]);

  useEffect(() => {
    if (extractedData?.places?.length) {
      handleMarkers(extractedData.places);
      setState({ data: extractedData, type: 'extract' });
    }
  }, [extractedData, handleMarkers, setState]);

  const handleSearch = async () => {
    setIsInputDisabled(true);
    resetCurrentLocation();
    const result = await refetch();
    const newData = result?.data?.items;

    if (newData) {
      handleMarkers(newData);
      setState({ data: newData, type: 'search' });
    }
  };

  const handleLink = () => {
    clearMarkers();
    navigate('/link');
  };

  const handleReset = () => {
    setIsInputDisabled(false);
    onClickReset();
    clearMarkers();
    setState({ data: null, type: 'list' });
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
            <SideMenu position="right" variant="link" onClick={() => handleLink()} />
            <SideMenu
              position="right"
              variant="emptyBookMark"
              onClick={() => setState((prev) => ({ ...prev, type: 'list' }))}
            />
          </SideMenu.Group>
        </div>
        <BottomSheet isOpen={!!state.type}>
          <BottomSheetContent type={state.type} data={state.data} />
        </BottomSheet>
      </div>
    </>
  );
};
