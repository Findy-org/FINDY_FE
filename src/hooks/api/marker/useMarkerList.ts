import { useQuery } from '@tanstack/react-query';

import { get } from '@/lib/axios';

export type Marker = {
  bookmarkName: string;
  markers: MarkersList;
};

export type MarkersList = {
  data: MarkerDetail[];
  currentCursor: number;
  pageSize: number;
  hasNext: boolean;
  nextCursor: number;
};

export type MarkerDetail = {
  markerId: number;
  title: string;
  address: string;
  mapx: string;
  mapy: string;
  category: {
    majorCategory: string;
    middleCategory: string;
  };
};

export const useMarkerList = (bookmarkId: number, token: string) => {
  return useQuery<Marker>({
    queryKey: ['bookmarkId', bookmarkId, token],
    queryFn: () =>
      get<Marker>(`api/markers/${bookmarkId}?cursor=0&size=10`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
  });
};
