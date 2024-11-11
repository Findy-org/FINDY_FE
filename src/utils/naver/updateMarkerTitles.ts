import { CustomMarker } from '../CustomMarker';

const MIN_ZOOM = 14;

export const updateMarkerTitles = (
  markersRef: React.MutableRefObject<naver.maps.Marker[]>,
  markerDataRef: React.MutableRefObject<Array<{ title: string; category: string }>>,
  zoomLevel: number
) => {
  const shouldShowTitles = zoomLevel >= MIN_ZOOM;

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
        anchor: new window.naver.maps.Point(30, 30),
      });
    }
  });
};
