import { memo } from 'react';
import { motion, useDragControls, AnimatePresence } from 'framer-motion';

import { useBottomSheet } from '@/hooks/common/useBottomSheet';

import { Props } from './BottomSheet.types';

const Content = ({ children }: React.PropsWithChildren) => (
  <div className="w-full text-black p-6">{children}</div>
);

export const BottomSheet = memo(({ children, resetTrigger = 0 }: Props) => {
  const dragControls = useDragControls();

  const { sheetHeight, isHidden, isInteractionDisabled, handleDrag, handleDragEnd, resetSheet } =
    useBottomSheet(resetTrigger);

  return (
    <>
      <div
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${
          isHidden ? 'opacity-0 pointer-events-none' : 'opacity-70 pointer-events-auto'
        }`}
        onClick={() => {
          if (!isInteractionDisabled) {
            resetSheet();
          }
        }}
      />

      <AnimatePresence>
        {!isHidden && (
          <motion.div
            className="absolute bottom-0 left-0 w-full bg-white shadow-[0px_-4px_10px_0px_rgba(0,0,0,0.1)] rounded-t-3xl p-4 overflow-hidden"
            style={{ height: sheetHeight }}
            drag="y"
            dragControls={dragControls}
            dragElastic={0}
            dragConstraints={{ top: 0, bottom: 0 }}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            animate={{ height: sheetHeight, opacity: isHidden ? 0 : 1 }}
            transition={{ type: 'spring', stiffness: 170, damping: 30, duration: 0.3 }}
            onPointerDown={(e) => !isInteractionDisabled && dragControls.start(e)}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
            <Content>{children}</Content>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});
