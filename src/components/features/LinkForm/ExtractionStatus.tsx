import { motion as m } from 'framer-motion';

import { iconNames } from '@/assets/icons';
import { Button } from '@/components/common/Button';
import { Header } from '@/components/common/Header';
import { Icon } from '@/components/common/Icon';
import { Body1 } from '@/components/common/Typography';
import { SLIDER_ANIMATION } from '@/constants/motions';

import { LinkFormProps } from './types';

export type ExtractProp = { isLoading: boolean } & LinkFormProps;
// TODO : isLoading 인 경우 framer-노출, 데이터 불러온 이후 map 페이지로 이동
export const ExtractionStatus = ({ onNext, onHomeClick, isLoading }: ExtractProp) => {
  return (
    <div className="flex flex-col h-full items-center justify-between">
      <Header left={<Icon name="home" size={20} onClick={onHomeClick} />} />
      <div className="w-full flex flex-col items-start gap-12 my-36 px-10 overflow-hidden">
        <Body1>{`현재 장소 정보를 추출 중입니다.\n조금만 더 기다려 주세요, 곧 완료됩니다!`}</Body1>
        <m.div
          initial={SLIDER_ANIMATION.initial}
          animate={SLIDER_ANIMATION.animate}
          transition={SLIDER_ANIMATION.transition}
          className="flex items-center w-max h-44"
        >
          {iconNames.map((name, index) => (
            <Icon key={index} name={name} size={100} />
          ))}
        </m.div>
      </div>
      <div className="absolute bottom-3 w-full max-w-[30rem] px-4 mb-5">
        <Button variant="primary" size="large" onClick={onNext} className="w-full">
          확인하러 가기
        </Button>
      </div>
    </div>
  );
};
