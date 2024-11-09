import { memo, useCallback, useEffect, useRef } from 'react';

import { useMarkers } from '@/hooks/common/useMarkers';
import { addMarkersToMap } from '@/utils/naver/addMarkersToMap';
import { clearExistingMarkers } from '@/utils/naver/clearExistingMarkers';
import { updateMarkerTitles } from '@/utils/naver/updateMarkerTitles';

import { Props } from './NaverMap.types';

// TODO : 대한민국 내에서만 표시 가능하도록 validation 추가
export const NaverMap = memo(
  ({ initialCenter = { lat: 37.549681, lng: 126.991911 }, initialZoom = 13 }: Props) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<naver.maps.Map | null>(null);
    const markersRef = useRef<naver.maps.Marker[]>([]);
    const markerDataRef = useRef<Array<{ title: string; category: string }>>([]);
    const { markers } = useMarkers();

    const handleZoomChange = useCallback((zoomLevel: number) => {
      updateMarkerTitles(markersRef, markerDataRef, zoomLevel);
    }, []);

    const clearMarkers = useCallback(() => {
      clearExistingMarkers(markersRef, markerDataRef);
    }, []);

    useEffect(() => {
      if (mapRef.current && window.naver) {
        const center = new window.naver.maps.LatLng(initialCenter.lat, initialCenter.lng);
        const map = new window.naver.maps.Map(mapRef.current, {
          center,
          zoom: initialZoom,
        });

        const listener = window.naver.maps.Event.addListener(map, 'zoom_changed', () => {
          const currentZoom = map.getZoom();
          handleZoomChange(currentZoom);
        });

        mapInstance.current = map;
        return () => {
          window.naver.maps.Event.removeListener(listener);
          mapInstance.current = null;
        };
      }
    }, [initialCenter.lat, initialCenter.lng, initialZoom, handleZoomChange]);

    useEffect(() => {
      if (mapInstance.current && markers.length > 0) {
        return addMarkersToMap(mapInstance, markers, markersRef, markerDataRef, clearMarkers);
      }
      clearMarkers();
    }, [clearMarkers, markers]);

    return <div id="map" ref={mapRef} style={{ width: '100%', height: '100vh' }} />;
  }
);
