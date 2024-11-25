import { useInfiniteQuery } from '@tanstack/react-query';

import { get } from '@/lib/axios';

export type Bookmarks = {
  data: BookmarkDetail[];
  currentCursor: number;
  pageSize: number;
  hasNext: boolean;
  nextCursor: number;
};

export type BookmarkDetail = {
  bookmarkId: number;
  youtuberProfile: string;
  name: string;
  markersCount: number;
  bookmarkType: string;
  youtubeLink: string;
};

export const useBookMarkList = (token: string) => {
  return useInfiniteQuery<Bookmarks>({
    queryKey: ['bookmarklist', token],
    queryFn: ({ pageParam = 0 }) =>
      get<Bookmarks>(`api/bookmarks?cursor=${pageParam}&size=7`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.nextCursor : undefined),
  });
};
