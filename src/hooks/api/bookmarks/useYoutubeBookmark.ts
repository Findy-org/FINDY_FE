import { useMutation } from '@tanstack/react-query';

import { post } from '@/lib/axios';

import { YoutubeResponse } from '../link/useYoutubePlace';

export const useYoutubeBookmark = (token: string) => {
  return useMutation({
    mutationFn: (youtubeData: YoutubeResponse) =>
      post(`api/bookmarks/youtube`, youtubeData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
  });
};
