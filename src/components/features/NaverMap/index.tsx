import { memo, useEffect, useRef } from 'react';

import { Props } from './NaverMap.types';

// TODO : 대한민국 내에서만 표시 가능하도록 validation 추가
export const NaverMap = memo(
  ({ initialCenter = { lat: 37.549681, lng: 126.991911 }, initialZoom = 13 }: Props) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<naver.maps.Map | null>(null);

    // TODO: window.naver가 load 되지 않을 경우 toast/modal 추가
    useEffect(() => {
      if (mapRef.current && window.naver) {
        const center = new window.naver.maps.LatLng(initialCenter.lat, initialCenter.lng);
        mapInstance.current = new window.naver.maps.Map(mapRef.current, {
          center,
          zoom: initialZoom,
        });
      }
      return () => {
        if (mapInstance.current) {
          mapInstance.current.destroy();
          mapInstance.current = null;
        }
      };
    }, [initialCenter.lat, initialCenter.lng, initialZoom]);

    return <div id="map" ref={mapRef} style={{ width: '100%', height: '100vh' }} />;
  }
);
