import { ComponentPropsWithoutRef } from 'react';

export type TypographyVariant =
  | 'Title1'
  | 'Title2'
  | 'Title3'
  | 'Body1'
  | 'Body2'
  | 'Body3'
  | 'Body4'
  | 'Caption';

export type Props = {
  weight?: string;
  variant: TypographyVariant;
} & ComponentPropsWithoutRef<'p'>;
