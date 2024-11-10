import { ComponentPropsWithoutRef, ReactNode } from 'react';

export type Props = ComponentPropsWithoutRef<'div'> & {
  resetTrigger?: boolean;
  children?: ReactNode;
};

export type DragInfo = {
  delta: { x: number; y: number };
};
