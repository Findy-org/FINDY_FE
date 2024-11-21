import { BottomSheetType } from '@/contexts/MapAtom';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStoredMapData = (): { data: any; type: BottomSheetType | null } => {
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
