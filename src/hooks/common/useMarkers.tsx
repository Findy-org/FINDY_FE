import { useAtom } from 'jotai';

import { addMarkerAtom, clearMarkersAtom, markersAtom } from '@/contexts/MarkerAtom';

export const useMarkers = () => {
  const [markers] = useAtom(markersAtom);
  const [, addMarker] = useAtom(addMarkerAtom);
  const [, clearMarkers] = useAtom(clearMarkersAtom);

  return {
    markers,
    addMarker,
    clearMarkers,
  };
};
