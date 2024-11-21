import { useCallback, useState } from 'react';

import { BookmarkDetail } from '@/components/features/BookmarkDetail';
import { BookmarkList } from '@/components/features/BookmarkList';
import { ExtractedPlacesList } from '@/components/features/ExtractedPlacesList/ExtractedPlacesList';
import { SearchResultsList } from '@/components/features/SearchResultsList';
import { BookmarkSelectionList } from '@/components/features/SearchResultsList/BookmarkSelectionList';
import { FLOW_CONFIGS, FlowType, STEPS, StepType } from '@/constants/funnelStep';
import { Place } from '@/types/naver';

import { useFunnel } from './useFunnel';

import { YoutubeResponse } from '../api/link/useYoutubePlace';
import { NewMarker } from '../api/marker/useNewMarker';
import { useAuth } from '../auth/useAuth';

type bottomFunnelProps = {
  type: FlowType;
  data?: Place[] | YoutubeResponse;
};
export const useBottomFunnel = ({ type, data }: bottomFunnelProps) => {
  const { token } = useAuth();
  const flowConfig = FLOW_CONFIGS[type];
  const { Funnel, Step, setStep } = useFunnel<StepType>(flowConfig.initialStep);

  const [selectedBookmarkId, setSelectedBookmarkId] = useState<number>(0);
  const [selectedPlace, setSelectedPlace] = useState<NewMarker>();

  const handleStepChange = useCallback(
    (nextStep: StepType) => {
      setStep(nextStep);
    },
    [setStep]
  );

  if (!token && type === 'list') {
    return (
      <div className="flex items-center justify-center py-8">
        <p className="text-gray-500">로그인한 사용자만 즐겨찾기가 가능합니다.</p>
      </div>
    );
  }

  const stepComponents: Record<StepType, React.ReactNode> = {
    [STEPS.SEARCH_PLACES]: (
      <SearchResultsList
        places={data as Place[]}
        onNext={() => handleStepChange(STEPS.LIST_SELECT)}
        onSelect={setSelectedPlace}
      />
    ),
    [STEPS.LIST_SELECT]: (
      <BookmarkSelectionList
        selectedPlace={selectedPlace as NewMarker}
        onNext={() => handleStepChange(STEPS.LIST)}
      />
    ),
    [STEPS.EXTRACTED_PLACES]: (
      <ExtractedPlacesList
        places={data as YoutubeResponse}
        onNext={() => handleStepChange(STEPS.LIST)}
      />
    ),
    [STEPS.LIST]: (
      <BookmarkList
        onNext={(bookmarkId) => {
          setSelectedBookmarkId(bookmarkId);
          handleStepChange(STEPS.BOOKMARK_DETAIL);
        }}
      />
    ),
    [STEPS.BOOKMARK_DETAIL]: (
      <BookmarkDetail bookmarkId={selectedBookmarkId} onPrev={() => handleStepChange(STEPS.LIST)} />
    ),
  };

  return (
    <Funnel>
      {flowConfig.steps.map((stepName) => (
        <Step key={stepName} name={stepName}>
          {stepComponents[stepName]}
        </Step>
      ))}
    </Funnel>
  );
};
