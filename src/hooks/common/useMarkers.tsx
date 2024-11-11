import { useContext } from 'react';

import { MarkerContext } from '@/contexts/MarkerContext';

export const useMarkers = () => {
  return useContext(MarkerContext);
};
