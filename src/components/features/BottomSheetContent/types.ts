import { YoutubeResponse } from '@/hooks/api/link/useYoutubePlace';
import { Place } from '@/types/naver';

export type BottomSheetContentProps = {
  type: 'search' | 'extract' | 'list' | null;
  data?: Place[] | YoutubeResponse | null;
};
