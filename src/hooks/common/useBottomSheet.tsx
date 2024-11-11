import { useState, useCallback, useRef, useEffect } from 'react';
import { animate } from 'framer-motion';

import { DragInfo } from '@/components/common/BottomSheet/BottomSheet.types';
import { INITIAL_HEIGHT, MIN_VISIBLE_HEIGHT, MAX_HEIGHT } from '@/constants/bottomSheetOptions';

export const useBottomSheet = (isOpen: boolean) => {
  const [sheetHeight, setSheetHeight] = useState(INITIAL_HEIGHT);
  const [isHidden, setIsHidden] = useState(false);
  const [isInteractionDisabled, setIsInteractionDisabled] = useState(false);
  const dragOffsetRef = useRef(0);
  const initialPositionRef = useRef(INITIAL_HEIGHT);
  const dragStartTimeRef = useRef<number | null>(null);
  const lastDragPositionRef = useRef(0);
  const lastVelocityRef = useRef(0);

  const resetSheetState = () => {
    setSheetHeight(INITIAL_HEIGHT);
    setIsHidden(false);
    setIsInteractionDisabled(false);
    dragOffsetRef.current = 0;
    initialPositionRef.current = INITIAL_HEIGHT;
    dragStartTimeRef.current = null;
  };

  useEffect(() => {
    if (isOpen) resetSheetState();
  }, [isOpen]);

  const handleDrag = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: DragInfo) => {
      if (isInteractionDisabled) return;

      try {
        if (!dragStartTimeRef.current) {
          dragStartTimeRef.current = Date.now();
          lastDragPositionRef.current = info.delta.y;
        }

        requestAnimationFrame(() => {
          const dragAmount = -info.delta.y;
          dragOffsetRef.current += dragAmount;

          const velocity =
            (lastDragPositionRef.current - info.delta.y) /
            (Date.now() - (dragStartTimeRef.current || Date.now()));
          lastVelocityRef.current = velocity;

          const newHeight = Math.min(
            Math.max(initialPositionRef.current + dragOffsetRef.current, MIN_VISIBLE_HEIGHT),
            MAX_HEIGHT
          );
          setSheetHeight(newHeight);
        });
      } catch (error) {
        console.error('드래그 중 에러 발생:', error);
        resetSheetState();
      }
    },
    [isInteractionDisabled]
  );

  const handleDragEnd = useCallback(() => {
    const velocity = lastVelocityRef.current;
    const projectedHeight = sheetHeight + velocity * 100;

    const snapPoints = [MIN_VISIBLE_HEIGHT, INITIAL_HEIGHT, MAX_HEIGHT];
    const nearestSnapPoint = snapPoints.reduce((prev, curr) =>
      Math.abs(curr - projectedHeight) < Math.abs(prev - projectedHeight) ? curr : prev
    );

    animate(sheetHeight, nearestSnapPoint, {
      duration: 0.3,
      ease: 'easeOut',
      onUpdate: (value) => setSheetHeight(value),
      onComplete: () => {
        if (nearestSnapPoint === MIN_VISIBLE_HEIGHT) {
          setIsHidden(true);
          setIsInteractionDisabled(true);
        }
      },
    });
  }, [sheetHeight]);

  const resetSheet = useCallback(resetSheetState, []);

  return { sheetHeight, isHidden, isInteractionDisabled, handleDrag, handleDragEnd, resetSheet };
};
