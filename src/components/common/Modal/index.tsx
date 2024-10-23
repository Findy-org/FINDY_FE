import { MouseEvent, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

import { defaultFadeInVariants } from '@/constants/motions';

import { Props } from './Modal.types';

import { Portal } from '../Portal';

const Content = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      variants={defaultFadeInVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative z-modal bg-white px-6 py-7 rounded-[1.25rem] shadow-lg"
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
        variants={defaultFadeInVariants}
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
