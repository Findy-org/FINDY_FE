import { useState, useCallback, useRef, useEffect } from 'react';

import { DragInfo } from '@/components/common/BottomSheet/BottomSheet.types';
import { INITIAL_HEIGHT, MIN_VISIBLE_HEIGHT, MAX_HEIGHT } from '@/constants/bottomSheetOptions';
import { BOTTOM_SHEET_ANIMATION } from '@/constants/motions';

export const useBottomSheet = (isOpen: boolean) => {
  const [sheetHeight, setSheetHeight] = useState(INITIAL_HEIGHT);
  const [isHidden, setIsHidden] = useState(false);
  const [isInteractionDisabled, setIsInteractionDisabled] = useState(false);
  const dragOffsetRef = useRef(0);
  const initialPositionRef = useRef(INITIAL_HEIGHT);
  const bottomSheetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setSheetHeight(INITIAL_HEIGHT);
      setIsHidden(false);
      setIsInteractionDisabled(false);
      dragOffsetRef.current = 0;
      initialPositionRef.current = INITIAL_HEIGHT;
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (bottomSheetRef.current && !bottomSheetRef.current.contains(event.target as Node)) {
        setSheetHeight(INITIAL_HEIGHT);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  const handleDrag = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: DragInfo) => {
      if (isInteractionDisabled) return;

      requestAnimationFrame(() => {
        const dragAmount = -info.delta.y;
        dragOffsetRef.current += dragAmount * 5;

        const newHeight = Math.min(
          Math.max(initialPositionRef.current + dragOffsetRef.current, MIN_VISIBLE_HEIGHT),
          MAX_HEIGHT
        );
        setSheetHeight(newHeight);
      });
    },
    [isInteractionDisabled, setSheetHeight]
  );

  const handleDragEnd = useCallback(() => {
    if (sheetHeight <= MIN_VISIBLE_HEIGHT) {
      setSheetHeight(MIN_VISIBLE_HEIGHT);
      setTimeout(() => {
        setIsHidden(true);
        setIsInteractionDisabled(true);
      }, BOTTOM_SHEET_ANIMATION.transition.duration * 1000);
      return;
    }

    if (sheetHeight > MAX_HEIGHT) {
      setSheetHeight(MAX_HEIGHT);
      return;
    }
  }, [sheetHeight]);

  return {
    sheetHeight,
    isHidden,
    isInteractionDisabled,
    handleDrag,
    handleDragEnd,
    bottomSheetRef,
  };
};
