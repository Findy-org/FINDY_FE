import { useInfiniteQuery } from '@tanstack/react-query';

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

export const useMarkerList = (markerId: number, token: string) => {
  return useInfiniteQuery<Marker>({
    queryKey: ['marker', markerId, token],
    queryFn: ({ pageParam = 0 }) =>
      get<Marker>(`api/markers/${markerId}?cursor=${pageParam}&size=7`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    initialPageParam: 0,
    getNextPageParam: (page) => {
      return page.markers.nextCursor || undefined;
    },
  });
};
