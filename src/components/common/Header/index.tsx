import { Props } from './Header.types';

export const Header = ({ left, middle, right, ...props }: Props) => {
  return (
    <div className="w-full h-12 flex items-center justify-between px-3 py-3" {...props}>
      <div className="flex items-center cursor-pointer">{left}</div>
      <div className="flex items-center">{middle}</div>
      <div className="flex items-center">{right}</div>
    </div>
  );
};
