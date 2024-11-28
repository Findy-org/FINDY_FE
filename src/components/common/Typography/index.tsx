import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/core';

import { Props, TypographyVariant } from './Typography.types';

const variantClasses = cva('whitespace-pre-line select-none', {
  variants: {
    type: {
      Title1: 'text-title1 leading-140',
      Title2: 'text-title2 leading-140',
      Title3: 'text-title3 leading-140',
      Body1: 'text-body2 leading-140 xs:text-body1',
      Body2: 'text-body3 leading-140 xs:text-body2',
      Body3: 'text-body4 leading-140 xs:text-body3',
      Body4: 'text-body4 leading-140',
      Caption: 'text-caption leading-140 inline-block',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    type: 'Body1',
    weight: 'medium',
  },
});

export type TypographyVariants = VariantProps<typeof variantClasses>;

const Typography = ({
  children,
  weight = 'medium',
  variant = 'Body1',
  className,
  ...props
}: Props & TypographyVariants) => {
  return (
    <p className={cn(variantClasses({ type: variant, weight }), className)} {...props}>
      {children}
    </p>
  );
};

const withBaseTypography = (variant: TypographyVariant) => {
  return (props: Omit<Props & TypographyVariants, 'variant'>) => (
    <Typography variant={variant} {...props} />
  );
};

export const Title1 = withBaseTypography('Title1');
export const Title2 = withBaseTypography('Title2');
export const Title3 = withBaseTypography('Title3');
export const Body1 = withBaseTypography('Body1');
export const Body2 = withBaseTypography('Body2');
export const Body3 = withBaseTypography('Body3');
export const Body4 = withBaseTypography('Body4');
export const Caption = withBaseTypography('Caption');
