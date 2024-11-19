import { useContext } from 'react';

import { MapDataContext, MapDataContextValue } from '@/contexts/MapContext';

export const useMapData = <T,>(): MapDataContextValue<T> => {
  const context = useContext(MapDataContext);
  return context as MapDataContextValue<T>;
};
