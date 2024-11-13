import { Place } from '@/types/naver';

import { CustomMarker } from '../CustomMarker';

const MIN_ZOOM = 14;

export const addMarkersToMap = (
  mapInstance: React.MutableRefObject<naver.maps.Map | null>,
  markers: Place[],
  markersRef: React.MutableRefObject<naver.maps.Marker[]>,
  markerDataRef: React.MutableRefObject<Array<{ title: string; category: string }>>,
  clearExistingMarkers: () => void
) => {
  if (mapInstance.current) {
    clearExistingMarkers();
    const firstMarker = markers[0];
    const initialPosition = new window.naver.maps.LatLng(
      Number(firstMarker.mapy) / 1e7,
      Number(firstMarker.mapx) / 1e7
    );

    const bounds = new window.naver.maps.LatLngBounds(initialPosition, initialPosition);
    const currentZoom = mapInstance.current.getZoom();
    const shouldShowTitles = currentZoom >= MIN_ZOOM;

    markers.forEach((markerData) => {
      const mapy = Number(markerData.mapy) / 1e7;
      const mapx = Number(markerData.mapx) / 1e7;

      const position = new window.naver.maps.LatLng(mapy, mapx);
      const marker = new window.naver.maps.Marker({
        position,
        map: mapInstance.current as naver.maps.Map,
        title: markerData.title,
        icon: {
          content: CustomMarker({
            title: markerData.title,
            categoryName: markerData.category as string,
            shouldShowTitle: shouldShowTitles,
          }),
          size: new window.naver.maps.Size(30, 30),
          anchor: new window.naver.maps.Point(15, 30),
        },
      });

      markersRef.current.push(marker);
      markerDataRef.current.push({
        title: markerData.title,
        category: markerData.category as string,
      });
      bounds.extend(position);
    });

    mapInstance.current.fitBounds(bounds, { left: 10, right: 10, top: 10, bottom: 10 });
  }
};
