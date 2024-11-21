import { useState, useCallback, useRef, useEffect } from 'react';

import { DragInfo } from '@/components/common/BottomSheet/BottomSheet.types';
import { INITIAL_HEIGHT, MIN_VISIBLE_HEIGHT, MAX_HEIGHT } from '@/constants/bottomSheetOptions';

export const useBottomSheet = (isOpen: boolean, setIsOpen: (value: boolean) => void) => {
  const [sheetHeight, setSheetHeight] = useState(INITIAL_HEIGHT);
  const [isInteractionDisabled, setIsInteractionDisabled] = useState(false);
  const dragOffsetRef = useRef(0);
  const initialPositionRef = useRef(INITIAL_HEIGHT);
  const bottomSheetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setSheetHeight(INITIAL_HEIGHT);
      setIsOpen(true);
      setIsInteractionDisabled(false);
      dragOffsetRef.current = 0;
      initialPositionRef.current = INITIAL_HEIGHT;
    }
  }, [isOpen, setIsOpen]);

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

        const contentHeight = bottomSheetRef.current?.scrollHeight || MAX_HEIGHT;
        const newHeight = Math.min(
          Math.max(initialPositionRef.current + dragOffsetRef.current, MIN_VISIBLE_HEIGHT),
          Math.min(contentHeight, MAX_HEIGHT)
        );

        setSheetHeight(newHeight);
      });
    },
    [isInteractionDisabled, setSheetHeight]
  );

  const handleDragEnd = useCallback(() => {
    if (sheetHeight <= MIN_VISIBLE_HEIGHT) {
      setIsOpen(false);
      setIsInteractionDisabled(true);
      return;
    }

    if (sheetHeight > MAX_HEIGHT) {
      setSheetHeight(MAX_HEIGHT);
      return;
    }

    initialPositionRef.current = sheetHeight;
    dragOffsetRef.current = 0;
  }, [setIsOpen, sheetHeight]);

  return {
    sheetHeight,
    isInteractionDisabled,
    handleDrag,
    handleDragEnd,
    bottomSheetRef,
  };
};
