import { ReactNode, createContext, useCallback, useState } from 'react';

import { Place } from '@/types/naver';

export const MarkerContext = createContext<{
  markers: Place[];
  addMarker: (marker: Place) => void;
  clearMarkers: () => void;
}>({
  markers: [],
  addMarker: () => {},
  clearMarkers: () => {},
});

export const MarkerProvider = ({ children }: { children: ReactNode }) => {
  const [markers, setMarkers] = useState<Place[]>([]);

  const addMarker = useCallback((marker: Place) => {
    setMarkers((prev) => [...prev, marker]);
  }, []);

  const clearMarkers = useCallback(() => {
    setMarkers([]);
  }, []);

  return (
    <MarkerContext.Provider value={{ markers, addMarker, clearMarkers }}>
      {children}
    </MarkerContext.Provider>
  );
};
