import { useMutation } from '@tanstack/react-query';

import { post } from '@/lib/external';

import { SharedResponse } from './useYoutubePlace';

export type NaverMapLink = {
  url: string;
};

export const useNaverMapPlace = () => {
  return useMutation<SharedResponse, Error, NaverMapLink>({
    mutationFn: ({ url }) =>
      post<SharedResponse>('naver_bookmark', {
        url,
      }),
    retry: 1,
  });
};
