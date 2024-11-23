import { FlowType } from '@/constants/funnelStep';
import { useBottomFunnel } from '@/hooks/common/useBottomFunnel';

import { BottomSheetContentProps } from './types';

import { YoutubeResponse } from '../../../hooks/api/link/useYoutubePlace';
import { Place } from '../../../types/naver';

export const BottomSheetContent = ({ type, data }: BottomSheetContentProps) => {
  return useBottomFunnel({ type: type as FlowType, data: data as Place[] | YoutubeResponse });
};
