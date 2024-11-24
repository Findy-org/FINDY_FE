import { useMutation } from '@tanstack/react-query';

import { post } from '@/lib/external';

import { ExtractResponse } from './useYoutubePlace';

export type NaverMapLink = {
  url: string;
};

export const useNaverMapPlace = () => {
  return useMutation<ExtractResponse, Error, NaverMapLink>({
    mutationFn: ({ url }) =>
      post<ExtractResponse>('naver_bookmark', {
        url,
      }),
    retry: 1,
  });
};
