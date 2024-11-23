import { useCallback, useEffect } from 'react';

import { clearMapStorage, getStoredMapData } from '@/utils/getStorageData';

import { useMapData } from './useMapData';
import { useMarkers } from './useMarkers';

export const useSessionDataLoader = (token: string | null) => {
  const { setState } = useMapData();
  const { clearMarkers, addMarker } = useMarkers();

  const loadSessionStorageData = useCallback(() => {
    const { data, type } = getStoredMapData();

    if (token && data && type) {
      setState({ data, type }, token);
      clearMarkers();
      const placesToMark = type === 'search' ? data : data.places;
      placesToMark.forEach(addMarker);
    }

    clearMapStorage();
  }, [token, setState, clearMarkers, addMarker]);

  useEffect(() => {
    loadSessionStorageData();
  }, [loadSessionStorageData]);
};
