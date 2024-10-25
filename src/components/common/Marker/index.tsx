import MarkerIcon from '@/assets/icons/marker.svg';

import { Props } from './Marker.types';

import { Icon } from '../Icon';

const ICON_SIZE = 30;

export const Marker = ({ categoryName, ...props }: Props) => {
  return (
    <button aria-label={`${categoryName} location marker`} className="relative" {...props}>
      <MarkerIcon className="relative" />
      <Icon
        name={categoryName}
        size={ICON_SIZE}
        className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2"
      />
    </button>
  );
};
