import { searchPlaceStepNames } from '@/constants/funnelStep';
import { useFunnel } from '@/hooks/common/useFunnel';
import { Place } from '@/types/naver';

import { BookmarkList } from '../BookmarkList/BookmarkList';
import { SearchList } from '../SearchList/SearchList';

export type SearchResultProps = {
  places: Place[];
};
export const SearchResult = ({ places }: SearchResultProps) => {
  const { Funnel, Step, setStep } = useFunnel(searchPlaceStepNames[0]);
  return (
    <>
      <Funnel>
        <Step name="추출장소">
          <SearchList places={places} onNext={() => setStep('리스트선택')} />
        </Step>
        {/* TODO : 리스트 선택, 리스트 노출 */}
        <Step name="리스트선택">2. 리스트 선택</Step>
        <Step name="리스트">
          <BookmarkList />
        </Step>
      </Funnel>
    </>
  );
};
