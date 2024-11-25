import { useMutation } from '@tanstack/react-query';

import { ExtractResponse } from '@/hooks/api/link/useYoutubePlace';
import { post } from '@/lib/axios';

export const useNaverBookmark = (token: string) => {
  return useMutation({
    mutationFn: (naverData: ExtractResponse) =>
      post(`api/bookmarks/naver`, naverData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
  });
};
