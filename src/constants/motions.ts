export const FADE_IN_ANIMATION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const FIDIES_ANIMATION = {
  initial: { opacity: 1, scale: 1, rotate: 0, y: 0 },
  animate: {
    scale: [1, 0.95, 1.1, 1],
    rotate: [0, 5, -5, 0],
    y: [0, -15, -15, 0],
  },
  transition: {
    duration: 3,
    ease: 'linear',
    repeat: Infinity,
    repeatType: 'loop' as const,
  },
};

export const THUMBNAIL_ANIMATION = {
  initial: { y: 0 },
  animate: {
    y: [0, -13, 0, 13, 0],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: 'loop' as const,
    ease: 'linear',
  },
};

export const SLIDER_ANIMATION = {
  initial: { x: '0%' },
  animate: { x: '-400px' },
  transition: {
    x: {
      repeat: Infinity,
      repeatType: 'loop',
      duration: 5,
      ease: 'linear',
    },
  },
};

export const BOTTOM_SHEET_ANIMATION = {
  animate: (sheetHeight: number, isHidden: boolean) => ({
    height: sheetHeight,
    opacity: isHidden ? 0 : 1,
  }),
  exit: {
    height: 0,
    opacity: 0,
  },
  transition: {
    type: 'spring',
    stiffness: 170,
    damping: 30,
    duration: 0.3,
  },
};
