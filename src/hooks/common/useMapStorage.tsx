import { useCallback } from 'react';

import { BottomSheetType } from '@/contexts/MapContext';

export const useMapStorage = () => {
  const getStoredMapData = useCallback(() => {
    const storedData = sessionStorage.getItem('mapData');
    const storedType = sessionStorage.getItem('bottomSheetType') as BottomSheetType | null;
    return {
      data: storedData ? JSON.parse(storedData) : null,
      type: storedType,
    };
  }, []);

  return { getStoredMapData };
};
