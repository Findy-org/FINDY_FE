import { ComponentPropsWithoutRef, ReactNode } from 'react';

export type Props = ComponentPropsWithoutRef<'div'> & {
  resetTrigger?: number;
  children?: ReactNode;
};

export type DragInfo = {
  delta: { x: number; y: number };
};
