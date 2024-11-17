import { CurrentMarker } from '../CurrentMarker';

export const currentMarkersToMap = (
  position: { lat: number; lng: number },
  mapInstance: naver.maps.Map,
  currentLocationMarkerRef: React.MutableRefObject<naver.maps.Marker | null>
) => {
  if (currentLocationMarkerRef.current) {
    currentLocationMarkerRef.current.setMap(null);
    currentLocationMarkerRef.current = null;
  }

  const currentMarker = new naver.maps.Marker({
    position: new naver.maps.LatLng(position.lat, position.lng),
    map: mapInstance,
    icon: {
      content: CurrentMarker(),
      anchor: new naver.maps.Point(10, 10),
    },
  });

  currentLocationMarkerRef.current = currentMarker;
  mapInstance.setCenter(new naver.maps.LatLng(position.lat, position.lng));
  mapInstance.setZoom(18);
};
