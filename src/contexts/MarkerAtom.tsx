import { atom } from 'jotai';

import { Place } from '@/types/naver';

export const markersAtom = atom<Place[]>([]);

export const addMarkerAtom = atom(null, (get, set, marker: Place) => {
  const currentMarkers = get(markersAtom);
  set(markersAtom, [...currentMarkers, marker]);
});

export const clearMarkersAtom = atom(null, (get, set) => {
  set(markersAtom, []);
});
