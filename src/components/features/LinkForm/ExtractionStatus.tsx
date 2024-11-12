import { motion as m } from 'framer-motion';

import { iconNames } from '@/assets/icons';
import { Button } from '@/components/common/Button';
import { Header } from '@/components/common/Header';
import { Icon } from '@/components/common/Icon';
import { Body1 } from '@/components/common/Typography';
import { SLIDER_ANIMATION, THUMBNAIL_ANIMATION } from '@/constants/motions';
import { Place } from '@/types/naver';

import { LinkFormProps } from './types';

export type ExtractProp = { url: string; place: Place[]; isLoading: boolean } & LinkFormProps;

export const ExtractionStatus = ({
  url,
  place,
  isLoading,
  onPrev = () => {},
  onNext,
  onHomeClick,
}: ExtractProp) => {
  const videoId = url.includes('v=') ? url.split('v=')[1].split('&')[0] : url.split('/').pop();
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const handleNavigate = () => {
    if (place.length > 0) {
      return onNext();
    }
    onPrev();
  };

  return (
    <div className="flex flex-col items-center justify-between">
      <Header left={<Icon name="home" size={20} onClick={onHomeClick} />} />
      <div className="w-full flex flex-col items-start gap-12 my-36 px-6 overflow-hidden">
        <Body1>
          <Body1>
            {isLoading
              ? `현재 장소 정보를 추출 중입니다.\n조금만 더 기다려 주세요, 곧 완료됩니다!`
              : place.length > 0
                ? `장소 정보가 성공적으로 추출되었습니다!\n지금 바로 확인하고, 원하는 장소를 방문해보세요!`
                : `추출된 장소가 없어요.\n다른 링크를 입력해주시겠어요?`}
          </Body1>
        </Body1>
        {videoId ? (
          <m.div
            initial={THUMBNAIL_ANIMATION.initial}
            animate={isLoading ? THUMBNAIL_ANIMATION.animate : { y: 0 }}
            transition={isLoading ? THUMBNAIL_ANIMATION.transition : undefined}
            className="flex items-center w-full h-2/4 my-3"
          >
            <img src={thumbnailUrl} alt="YouTube Thumbnail" className="w-full h-full rounded-md" />
          </m.div>
        ) : (
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
        )}
      </div>
      <div className="absolute bottom-3 w-full max-w-[30rem] px-4 mb-5">
        <Button
          variant="primary"
          size="large"
          onClick={handleNavigate}
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? '확인하러 가기' : place.length > 0 ? '확인하러 가기' : '뒤로가기'}
        </Button>
      </div>
    </div>
  );
};
