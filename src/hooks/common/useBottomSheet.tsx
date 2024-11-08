import { useState, useCallback, useRef, useEffect } from 'react';

import { DragInfo } from '@/components/common/BottomSheet/BottomSheet.types';

export const useBottomSheet = (initialHeight = 150, minVisibleHeight = 60, resetTrigger = 0) => {
  const [sheetHeight, setSheetHeight] = useState(initialHeight);
  const [isHidden, setIsHidden] = useState(false);
  const [isInteractionDisabled, setIsInteractionDisabled] = useState(false);
  const dragOffsetRef = useRef(0);
  const initialPositionRef = useRef(initialHeight);

  useEffect(() => {
    setSheetHeight(initialHeight);
    setIsHidden(false);
    setIsInteractionDisabled(false);
    dragOffsetRef.current = 0;
    initialPositionRef.current = initialHeight;
  }, [resetTrigger, initialHeight]);

  const handleDrag = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: DragInfo) => {
      if (isInteractionDisabled) return;

      const dragAmount = -info.delta.y;
      dragOffsetRef.current += dragAmount;

      const newHeight = Math.max(
        initialPositionRef.current + dragOffsetRef.current,
        minVisibleHeight
      );
      setSheetHeight(newHeight);
    },
    [isInteractionDisabled, minVisibleHeight]
  );

  const handleDragEnd = useCallback(() => {
    if (sheetHeight <= minVisibleHeight) {
      setIsHidden(true);
      setIsInteractionDisabled(true);
    }
  }, [sheetHeight, minVisibleHeight]);

  const resetSheet = useCallback(() => {
    setSheetHeight(initialHeight);
    setIsHidden(false);
    setIsInteractionDisabled(false);
    dragOffsetRef.current = 0;
    initialPositionRef.current = initialHeight;
  }, [initialHeight]);

  return { sheetHeight, isHidden, isInteractionDisabled, handleDrag, handleDragEnd, resetSheet };
};
