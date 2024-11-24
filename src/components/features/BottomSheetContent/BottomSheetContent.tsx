import { FlowType } from '@/constants/funnelStep';
import { ExtractResponse } from '@/hooks/api/link/useYoutubePlace';
import { useBottomFunnel } from '@/hooks/common/useBottomFunnel';

import { BottomSheetContentProps } from './types';

import { Place } from '../../../types/naver';

export const BottomSheetContent = ({ type, data }: BottomSheetContentProps) => {
  return useBottomFunnel({ type: type as FlowType, data: data as Place[] | ExtractResponse });
};
