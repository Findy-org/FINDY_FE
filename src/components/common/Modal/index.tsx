import { MouseEvent, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

import { FADE_IN_ANIMATION } from '@/constants/motions';

import { Props } from './Modal.types';

import { Portal } from '../Portal';

const Content = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      initial={FADE_IN_ANIMATION.initial}
      animate={FADE_IN_ANIMATION.animate}
      exit={FADE_IN_ANIMATION.exit}
      className="relative z-modal bg-white px-4 py-4 rounded-[1.25rem] shadow-lg"
    >
      {children}
    </motion.div>
  );
};

export const Modal = ({ isOpen, onClickOutside, children }: Props) => {
  const onClickOutsideDefault = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLElement && e.target === e.currentTarget && onClickOutside) {
      onClickOutside();
    }
  };

  return (
    <Portal isOpen={isOpen}>
      <motion.div
        onClick={onClickOutsideDefault}
        variants={FADE_IN_ANIMATION}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50"
      >
        <Content>{children}</Content>
      </motion.div>
    </Portal>
  );
};
