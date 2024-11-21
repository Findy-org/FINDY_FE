import { BottomSheetType } from '@/contexts/MapAtom';

export const getStoredMapData = (): { data: unknown | null; type: BottomSheetType | null } => {
  const storedData = sessionStorage.getItem('mapData');
  const storedType = sessionStorage.getItem('bottomSheetType') as BottomSheetType | null;
  return {
    data: storedData ? JSON.parse(storedData) : null,
    type: storedType,
  };
};

export const clearMapStorage = (): void => {
  sessionStorage.removeItem('mapData');
  sessionStorage.removeItem('bottomSheetType');
};
