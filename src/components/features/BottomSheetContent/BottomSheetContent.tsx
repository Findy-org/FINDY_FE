import { YoutubeResponse } from '@/hooks/api/link/useYoutubePlace';
import { useAuth } from '@/hooks/auth/useAuth';
import { Place } from '@/types/naver';

import { ExtractedPlaces } from './ExtractedPlaces';
import { SearchResult } from './SearchResult';
import { BottomSheetContentProps } from './types';

import { BookmarkList } from '../BookmarkList/BookmarkList';

export const BottomSheetContent = ({ type, data }: BottomSheetContentProps) => {
  const { token } = useAuth();

  if (type === 'search') {
    return <SearchResult places={data as Place[]} />;
  }

  if (type === 'extract') {
    return <ExtractedPlaces places={data as YoutubeResponse} />;
  }

  if (token && type === 'list') {
    return <BookmarkList />;
  }

  // TODO : 로그인하지 않은 경우 로그인 유도
  return (
    <div className=" flex items-center justify-center py-8">
      <p className="text-gray-500">로그인한 사용자만 즐겨찾기가 가능합니다.</p>
    </div>
  );
};
