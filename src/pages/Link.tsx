import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { ExtractionStatus, Landing, LinkInput } from '@/components/features/LinkForm';
import { linkStepNames } from '@/constants/linkForm';
import { useFunnel } from '@/hooks/common/useFunnel';

export const Link = () => {
  const { Funnel, Step, setStep } = useFunnel(linkStepNames[0]);
  const navigate = useNavigate();

  const handleHomeClick = useCallback(() => {
    navigate('/map');
  }, [navigate]);
  return (
    <Funnel>
      <Step name="입력전">
        <Landing onNext={() => setStep('링크입력')} onHomeClick={handleHomeClick} />
      </Step>

      <Step name="링크입력">
        <LinkInput onNext={() => setStep('추출상태')} onHomeClick={handleHomeClick} />
      </Step>

      <Step name="추출상태">
        <ExtractionStatus onNext={() => {}} isLoading={true} onHomeClick={handleHomeClick} />
      </Step>
    </Funnel>
  );
};
