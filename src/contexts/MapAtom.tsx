/* eslint-disable @typescript-eslint/no-explicit-any */
import { atom } from 'jotai';

export type BottomSheetType = 'extract' | 'search' | 'list';

export type MapDataState<T> = {
  data: T | null;
  type: BottomSheetType | null;
};

export const mapDataAtom = atom<MapDataState<any>>({
  data: null,
  type: null,
});

export const setMapDataAtom = atom(
  (get) => get(mapDataAtom),
  (_get, set, { newState, token }: { newState: MapDataState<any>; token: string | null }) => {
    set(mapDataAtom, newState);

    if (!token && newState.data !== null) {
      sessionStorage.setItem('mapData', JSON.stringify(newState.data));
    }
    if (!token && newState.type !== null) {
      sessionStorage.setItem('bottomSheetType', newState.type);
    }
  }
);
