import { useState, useCallback, useRef, useEffect } from 'react';

import { DragInfo } from '@/components/common/BottomSheet/BottomSheet.types';
import { INITIAL_HEIGHT, MIN_VISIBLE_HEIGHT, MAX_HEIGHT } from '@/constants/bottomSheetOptions';

export const useBottomSheet = (resetTrigger: boolean, onClose?: () => void) => {
  const [sheetHeight, setSheetHeight] = useState(INITIAL_HEIGHT);
  const [isHidden, setIsHidden] = useState(false);
  const [isInteractionDisabled, setIsInteractionDisabled] = useState(false);
  const dragOffsetRef = useRef(0);
  const initialPositionRef = useRef(INITIAL_HEIGHT);

  useEffect(() => {
    if (resetTrigger) {
      setSheetHeight(INITIAL_HEIGHT);
      setIsHidden(false);
      setIsInteractionDisabled(false);
      dragOffsetRef.current = 0;
      initialPositionRef.current = INITIAL_HEIGHT;
    }
  }, [resetTrigger]);

  const handleDrag = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: DragInfo) => {
      if (isInteractionDisabled) return;

      const dragAmount = -info.delta.y;
      dragOffsetRef.current += dragAmount;

      const newHeight = Math.min(
        Math.max(initialPositionRef.current + dragOffsetRef.current, MIN_VISIBLE_HEIGHT),
        MAX_HEIGHT
      );
      setSheetHeight(newHeight);
    },
    [isInteractionDisabled]
  );

  const handleDragEnd = useCallback(() => {
    if (sheetHeight <= MIN_VISIBLE_HEIGHT) {
      setIsHidden(true);
      setIsInteractionDisabled(true);
      if (onClose) {
        onClose();
      }
    } else if (sheetHeight > MAX_HEIGHT) {
      setSheetHeight(MAX_HEIGHT);
    }
  }, [sheetHeight, onClose]);

  const resetSheet = useCallback(() => {
    setSheetHeight(INITIAL_HEIGHT);
    setIsHidden(false);
    setIsInteractionDisabled(false);
    dragOffsetRef.current = 0;
    initialPositionRef.current = INITIAL_HEIGHT;
  }, []);

  const handleClose = useCallback(() => {
    if (!isInteractionDisabled) {
      resetSheet();
    }
  }, [isInteractionDisabled, resetSheet]);

  return {
    sheetHeight,
    isHidden,
    isInteractionDisabled,
    handleDrag,
    handleDragEnd,
    resetSheet,
    handleClose,
  };
};
