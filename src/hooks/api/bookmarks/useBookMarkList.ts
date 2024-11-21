import { useQuery } from '@tanstack/react-query';

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
  return useQuery<Bookmarks>({
    queryKey: ['bookmarklist', token],
    queryFn: () =>
      get<Bookmarks>('api/bookmarks?cursor=0&size=10', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
  });
};
