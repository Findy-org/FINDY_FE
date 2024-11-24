import { useMutation } from '@tanstack/react-query';

import { ExtractResponse } from '@/hooks/api/link/useYoutubePlace';
import { post } from '@/lib/axios';

export const useYoutubeBookmark = (token: string) => {
  return useMutation({
    mutationFn: (youtubeData: ExtractResponse) =>
      post(`api/bookmarks/youtube`, youtubeData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
  });
};
