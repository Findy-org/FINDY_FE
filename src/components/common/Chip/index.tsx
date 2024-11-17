import { Props } from './Chip.types';
import { ChipVariants } from './Chip.variants';

export const Chip = ({ variant, children, ...props }: Props) => {
  return (
    <span className={ChipVariants({ variant })} {...props}>
      {children}
    </span>
  );
};
