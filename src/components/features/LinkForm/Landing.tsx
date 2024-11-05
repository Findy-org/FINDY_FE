import { motion as m } from 'framer-motion';

import { Button } from '@/components/common/Button';
import { Header } from '@/components/common/Header';
import { Icon } from '@/components/common/Icon';
import { Body1 } from '@/components/common/Typography';

import { LinkFormProps } from './types';

export const Landing = ({ onNext, onHomeClick }: LinkFormProps) => {
  return (
    <div className="flex flex-col h-full items-center justify-between">
      <Header left={<Icon name="home" size={20} onClick={onHomeClick} />} />
      <div className="flex flex-col items-center gap-10 my-36">
        {/* TODO : framer-motion animation constants로 변경 */}
        <m.div
          initial={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
          animate={{
            scale: [1, 0.95, 1.05, 1],
            rotate: [0, 5, -5, 0],
            y: [0, -5, -10, -5, 0],
          }}
          transition={{
            duration: 3,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <Icon name="fidies" size={200} />
        </m.div>
        <Body1>핀디와 함께, 특별한 순간을 찾아보세요</Body1>
      </div>
      <div className="absolute bottom-3 w-full max-w-[480px] px-4 mb-5">
        <Button variant="primary" size="large" onClick={onNext} className="w-full">
          다음
        </Button>
      </div>
    </div>
  );
};
