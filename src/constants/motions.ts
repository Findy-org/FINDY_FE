export const FADE_IN_ANIMATION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const FIDIES_ANIMATION = {
  initial: { opacity: 1, scale: 1, rotate: 0, y: 0 },
  animate: {
    scale: [1, 0.95, 1.05, 1],
    rotate: [0, 5, -5, 0],
    y: [0, -5, -10, -5, 0],
  },
  transition: {
    duration: 3,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatType: 'loop' as const,
  },
};

export const THUMBNAIL_ANIMATION = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0, 10, 0],
  },
  transition: {
    duration: 1,
    repeat: Infinity,
    repeatType: 'mirror' as const,
    ease: 'easeInOut',
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
