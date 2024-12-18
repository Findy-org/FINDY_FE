import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { BottomSheet } from '@/components/common/BottomSheet';
import { SearchInput } from '@/components/common/SearchInput';
import { SideMenu } from '@/components/common/SideMenu';
import { BottomSheetContent } from '@/components/features/BottomSheetContent/BottomSheetContent';
import { NaverMap } from '@/components/features/NaverMap';
import { BottomSheetType } from '@/contexts/MapAtom';
import { ExtractResponse } from '@/hooks/api/link/useYoutubePlace';
import { useNaverSearchResult } from '@/hooks/api/search/useNaverSearchResult';
import { useAuth } from '@/hooks/auth/useAuth';
import { useInput } from '@/hooks/common/useInput';
import { useMapData } from '@/hooks/common/useMapData';
import { useMapState } from '@/hooks/common/useMapState';
import { useMarkers } from '@/hooks/common/useMarkers';
import { useSessionDataLoader } from '@/hooks/common/useSessionDataLoader';
import { Place } from '@/types/naver';
import { parseSearchResult } from '@/utils/parseSearchResult';

export const MapView = () => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const { state, setState } = useMapData<Place[] | ExtractResponse>();
  const { addMarker, clearMarkers } = useMarkers();
  const { initialCenter, zoomLevel, isCurrent, updateLocation, resetCurrentLocation } =
    useMapState();
  const { state: searchValue, onChange, onClickReset } = useInput();
  const { refetch } = useNaverSearchResult(searchValue);
  useSessionDataLoader(token);

  const [isInputDisabled, setIsInputDisabled] = useState(false);

  const handleDataUpdate = useCallback(
    (newData: ExtractResponse | Place[], type: BottomSheetType) => {
      clearMarkers();
      if ('places' in newData) newData.places.forEach(addMarker);
      if (Array.isArray(newData)) newData.forEach((place) => addMarker(place));
      setState({ data: newData, type }, token);
    },
    [clearMarkers, addMarker, setState, token]
  );

  useEffect(() => {
    const extractedData = location.state?.data;
    if (extractedData?.places.length) {
      handleDataUpdate(extractedData, 'extract');
    }
  }, [handleDataUpdate, location.state, setState, token]);

  const handleSearch = async () => {
    setIsInputDisabled(true);
    resetCurrentLocation();
    const result = await refetch();
    if (result?.data?.items) {
      handleDataUpdate(parseSearchResult(result.data.items), 'search');
    }
  };

  const handleLink = () => {
    clearMarkers();
    navigate('/link');
  };

  const handleReset = () => {
    clearMarkers();
    setIsInputDisabled(false);
    setState({ data: null, type: null }, token);
    onClickReset();
  };

  const handleCurrentLocation = useCallback(() => {
    clearMarkers();
    setState({ data: null, type: null }, token);
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      updateLocation(latitude, longitude, 18);
    });
  }, [clearMarkers, setState, token, updateLocation]);

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
              onClick={() => {
                resetCurrentLocation();
                setState({ data: state.data, type: 'list' }, token);
              }}
            />
          </SideMenu.Group>
        </div>
        <BottomSheet
          isOpen={!!state.type}
          setIsOpen={(open) => {
            if (!open) setState({ ...state, type: null }, token);
          }}
        >
          <BottomSheetContent key={state.type} type={state.type} data={state.data} />
        </BottomSheet>
      </div>
    </>
  );
};
