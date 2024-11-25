import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { ExtractionStatus, Landing, LinkInput } from '@/components/features/LinkForm';
import { useNaverMapPlace } from '@/hooks/api/link/useNaverMapPlace';
import { useYoutubePlace } from '@/hooks/api/link/useYoutubePlace';
import { useFunnel } from '@/hooks/common/useFunnel';
import { useYoutubeContext } from '@/hooks/common/useYoutubeContext';
import { Place } from '@/types/naver';

export const Link = () => {
  const navigate = useNavigate();
  const [extract, dispatch] = useYoutubeContext();
  const { Funnel, Step, setStep } = useFunnel<'입력전' | '링크입력' | '추출상태'>('입력전');

  const {
    refetch: fetchYoutubePlaces,
    data: youtubeData,
    isLoading: isYoutubeLoading,
  } = useYoutubePlace(extract.link);
  const {
    mutate: fetchNaverPlace,
    data: naverData,
    isPending: isNaverLoading,
  } = useNaverMapPlace();

  const isNaverLink = extract.link.includes('naver');
  const data = isNaverLink ? naverData : youtubeData;
  const isLoading = isNaverLink ? isNaverLoading : isYoutubeLoading;

  const handleHomeClick = useCallback(() => {
    navigate('/map');
  }, [navigate]);

  const handleLinkSubmit = async (link: string) => {
    if (link.includes('naver')) {
      return await fetchNaverPlace({ url: link });
    }
    if (!link.includes('naver')) {
      await fetchYoutubePlaces();
    }
  };

  return (
    <Funnel>
      <Step name="입력전">
        <Landing onNext={() => setStep('링크입력')} onHomeClick={handleHomeClick} />
      </Step>

      <Step name="링크입력">
        <LinkInput
          context={{
            state: extract.link,
            setState: (link) => dispatch({ type: 'SET_LINK', payload: link }),
          }}
          onHomeClick={handleHomeClick}
          onNext={(link) => {
            handleLinkSubmit(link as string);
            setStep('추출상태');
          }}
        />
      </Step>

      <Step name="추출상태">
        <ExtractionStatus
          url={extract.link}
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
