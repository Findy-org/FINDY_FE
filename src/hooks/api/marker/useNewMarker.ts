import { useMutation } from '@tanstack/react-query';

import { post } from '@/lib/axios';

export type NewMarker = {
  title: string;
  category: string;
  description: string;
  telephone: string;
  address: string;
  roadAddress: string;
  link: string;
  mapx: string;
  mapy: string;
};

export const useNewMarker = (bookmarkId: number, token: string) => {
  return useMutation({
    mutationFn: (data: NewMarker) =>
      post(`api/markers/${bookmarkId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
  });
};
