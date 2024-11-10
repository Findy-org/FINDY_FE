export const clearExistingMarkers = (
  markersRef: React.MutableRefObject<naver.maps.Marker[]>,
  markerDataRef: React.MutableRefObject<Array<{ title: string; category: string }>>
) => {
  markersRef.current.forEach((marker) => {
    marker.setMap(null);
  });
  markersRef.current = [];
  markerDataRef.current = [];
};
