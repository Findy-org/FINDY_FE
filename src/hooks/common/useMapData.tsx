import { useCallback } from 'react';
import { useAtom } from 'jotai';

import { MapDataState, mapDataAtom, setMapDataAtom } from '@/contexts/MapAtom';

export const useMapData = <T,>() => {
  const [mapData] = useAtom<MapDataState<T>>(mapDataAtom);
  const [, setMapData] = useAtom(setMapDataAtom);

  const setState = useCallback(
    (newState: MapDataState<T>, token: string | null) => {
      setMapData({ newState, token });
    },
    [setMapData]
  );

  return { state: mapData, setState };
};
