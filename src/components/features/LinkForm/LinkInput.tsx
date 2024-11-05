import { Button } from '@/components/common/Button';
import { Header } from '@/components/common/Header';
import { Icon } from '@/components/common/Icon';
import { Input } from '@/components/common/Input';
import { Body1 } from '@/components/common/Typography';
import { useInput } from '@/hooks/common/useInput';

import { LinkFormProps } from './types';

export const LinkInput = ({ onNext, onHomeClick }: LinkFormProps) => {
  const { state, onChange, onClickReset, isValid, onBlur, ref } = useInput();

  return (
    <div className="flex flex-col h-full items-center justify-between">
      <Header left={<Icon name="home" size={20} onClick={onHomeClick} />} />
      <div className="w-full flex flex-col items-start gap-6 my-36 px-10">
        <Body1>{`아래에 링크를 입력해주시면,\n특별한 장소 정보를 추출해드릴게요.`}</Body1>
        <Input
          value={state}
          onChange={onChange}
          onBlur={onBlur}
          onClickReset={onClickReset}
          isValid={isValid}
          ref={ref}
        />
      </div>
      <div className="absolute bottom-3 w-full max-w-[480px] px-4 mb-5">
        <Button
          variant="primary"
          size="large"
          onClick={onNext}
          disabled={state.length === 0 || !isValid}
          className="w-full"
        >
          장소 추출하기
        </Button>
      </div>
    </div>
  );
};
