import { Props } from './Chip.types';

export const Chip = ({ children, ...props }: Props) => {
  return (
    <span
      className="h-7 w-7 bg-primary rounded-md text-body4 text-white cursor-default px-3 py-1"
      {...props}
    >
      {children}
    </span>
  );
};
