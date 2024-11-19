import { extractedPlaceStepNames } from '@/constants/funnelStep';
import { YoutubeResponse } from '@/hooks/api/link/useYoutubePlace';
import { useFunnel } from '@/hooks/common/useFunnel';

import { BookmarkList } from '../BookmarkList/BookmarkList';
import { ExtractedList } from '../ExtractedPlacesList/ExtractedList';

export type ExtractedPlacesProps = {
  places: YoutubeResponse;
};
export const ExtractedPlaces = ({ places }: ExtractedPlacesProps) => {
  const { Funnel, Step, setStep } = useFunnel(extractedPlaceStepNames[0]);

  return (
    <>
      <Funnel>
        <Step name="추출장소">
          <ExtractedList places={places} onNext={() => setStep('리스트')} />
        </Step>
        {/* TODO : 리스트 노출 */}
        <Step name="리스트">
          <BookmarkList />
        </Step>
      </Funnel>
    </>
  );
};
