import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { ExtractionStatus, Landing, LinkInput } from '@/components/features/LinkForm';
import { linkStepNames } from '@/constants/funnelStep';
import { useYoutubePlace } from '@/hooks/api/link/useYoutubePlace';
import { useFunnel } from '@/hooks/common/useFunnel';
import { useYoutubeContext } from '@/hooks/common/useYoutubeContext';
import { Place } from '@/types/naver';

export const Link = () => {
  const [link, dispatch] = useYoutubeContext();
  const navigate = useNavigate();
  const { Funnel, Step, setStep } = useFunnel(linkStepNames[0]);

  const handleHomeClick = useCallback(() => {
    navigate('/map');
  }, [navigate]);

  const {
    refetch: fetchPlaces,
    data,
    isLoading,
  } = useYoutubePlace(encodeURIComponent(link.youtubeLink));

  const handleLinkSubmit = useCallback(() => {
    fetchPlaces();
  }, [fetchPlaces]);

  return (
    <Funnel>
      <Step name="입력전">
        <Landing onNext={() => setStep('링크입력')} onHomeClick={handleHomeClick} />
      </Step>

      <Step name="링크입력">
        <LinkInput
          onNext={() => {
            handleLinkSubmit();
            setStep('추출상태');
          }}
          onHomeClick={handleHomeClick}
          context={{
            state: link.youtubeLink,
            setState: (link) => {
              dispatch({ type: 'SET_LINK', payload: { youtubeLink: link } });
            },
          }}
        />
      </Step>

      <Step name="추출상태">
        <ExtractionStatus
          url={link.youtubeLink}
          place={data?.places as Place[]}
          onPrev={() => setStep('링크입력')}
          onNext={() => navigate('/map', { state: { data } })}
          isLoading={isLoading}
          onHomeClick={handleHomeClick}
        />
      </Step>
    </Funnel>
  );
};
