import { CustomMarker } from '../CustomMarker';

export const updateMarkerTitles = (
  markersRef: React.MutableRefObject<naver.maps.Marker[]>,
  markerDataRef: React.MutableRefObject<Array<{ title: string; category: string }>>,
  zoomLevel: number
) => {
  const shouldShowTitles = zoomLevel >= 14;

  markersRef.current.forEach((marker, index) => {
    const markerData = markerDataRef.current[index];
    if (markerData) {
      marker.setIcon({
        content: CustomMarker({
          title: markerData.title,
          categoryName: markerData.category,
          shouldShowTitle: shouldShowTitles,
        }),
        size: new window.naver.maps.Size(30, 30),
        anchor: new window.naver.maps.Point(15, 30),
      });
    }
  });
};
