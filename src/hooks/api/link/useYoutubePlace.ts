import { useQuery } from '@tanstack/react-query';

import { get } from '@/lib/external';
import { Place } from '@/types/naver';

export type SharedResponse = {
  name?: string;
  youtuberId?: string;
  youtuberName?: string;
  youtuberProfile?: string;
  youtubeLink?: string;
  places: Place[];
};

export const useYoutubePlace = (youtubeLink: string) => {
  return useQuery<SharedResponse>({
    queryKey: ['youtubeLink', youtubeLink],
    queryFn: () => get<SharedResponse>(`video/place/${encodeURIComponent(youtubeLink)}`),
    enabled: !!youtubeLink,
    retry: 1,
  });
};
