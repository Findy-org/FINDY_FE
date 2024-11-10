import { useQuery } from '@tanstack/react-query';

import { get } from '@/lib/naver';
import { NaverMapResponse } from '@/types/naver';

export const useNaverSearchResult = (search: string) => {
  return useQuery<NaverMapResponse>({
    queryKey: ['NaverSearch', search],
    queryFn: () =>
      get<NaverMapResponse>(`/search/local.json?query=${search}&display=5&&sort=random`),
    enabled: false,
  });
};
