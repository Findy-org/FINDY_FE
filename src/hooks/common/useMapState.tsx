import { useState, useCallback } from 'react';

export const useMapState = (initialLat = 37.549681, initialLng = 126.991911, initialZoom = 13) => {
  const [initialCenter, setInitialCenter] = useState({ lat: initialLat, lng: initialLng });
  const [zoomLevel, setZoomLevel] = useState(initialZoom);
  const [isCurrent, setIsCurrent] = useState(false);

  const updateLocation = useCallback((lat: number, lng: number, zoom: number) => {
    setInitialCenter({ lat, lng });
    setZoomLevel(zoom);
    setIsCurrent(true);
  }, []);

  const resetCurrentLocation = useCallback(() => {
    setIsCurrent(false);
  }, []);

  return {
    initialCenter,
    zoomLevel,
    isCurrent,
    updateLocation,
    resetCurrentLocation,
  };
};
