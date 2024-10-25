import { useEffect, useRef } from 'react';

import { Props } from './NaverMap.types';

export const NaverMap = ({
  initialCenter = { lat: 37.549681, lng: 126.991911 },
  initialZoom = 13,
}: Props) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<naver.maps.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && window.naver) {
      const center = new window.naver.maps.LatLng(initialCenter.lat, initialCenter.lng);
      mapInstance.current = new window.naver.maps.Map(mapRef.current, {
        center,
        zoom: initialZoom,
      });
    }
  }, [initialCenter.lat, initialCenter.lng, initialZoom]);

  return <div id="map" ref={mapRef} style={{ width: '100%', height: '100vh' }} />;
};
