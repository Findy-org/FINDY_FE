import MarkerIcon from '@/assets/icons/marker.svg';

import { Props } from './Marker.types';

import { Icon } from '../Icon';

export const Marker = ({ categoryName, ...props }: Props) => {
  return (
    <button className="relative inline-block" {...props}>
      <MarkerIcon />
      <Icon
        name={categoryName}
        size={35}
        className={`absolute left-[51%] ${categoryName == 'restaurant' ? 'top-[55%]' : 'top-1/2'} -translate-x-1/2 -translate-y-1/2`}
      />
    </button>
  );
};
