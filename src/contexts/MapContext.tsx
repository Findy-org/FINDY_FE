import { ReactNode, createContext, useEffect, useState } from 'react';

export type BottomSheetType = 'login' | 'extract' | 'search' | 'list';

export type MapDataState<T> = {
  data: T | null;
  type: BottomSheetType | null;
};

export type MapDataContextValue<T> = {
  state: MapDataState<T>;
  setState: React.Dispatch<React.SetStateAction<MapDataState<T>>>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MapDataContext = createContext<MapDataContextValue<any> | null>(null);

export const MapDataProvider = <T,>({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<MapDataState<T>>({
    data: null,
    type: null,
  });
  const [isFirstLogin, setIsFirstLogin] = useState(true);

  useEffect(() => {
    if (isFirstLogin) {
      if (state.type !== null) {
        sessionStorage.setItem('bottomSheetType', state.type);
      }
      if (state.data !== null) {
        sessionStorage.setItem('mapData', JSON.stringify(state.data));
      }
      setIsFirstLogin(false);
    }
  }, [state, isFirstLogin]);

  return <MapDataContext.Provider value={{ state, setState }}>{children}</MapDataContext.Provider>;
};
