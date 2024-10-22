import MarkerIcon from '@/assets/icons/marker.svg';

import { Props } from './Marker.types';

import { Icon } from '../Icon';

export const Marker = ({ categoryName, ...props }: Props) => {
  const ICON_SIZE = 35;
  const ICON_POSITIONS = {
    default: { left: '51%', top: '1/2' },
    restaurant: { left: '51%', top: '[55%]' },
  };

  const position =
    categoryName === 'restaurant' ? ICON_POSITIONS.restaurant : ICON_POSITIONS.default;
  return (
    <button
      aria-label={`${categoryName} location marker`}
      className="relative inline-block"
      {...props}
    >
      <MarkerIcon />
      <Icon
        name={categoryName}
        size={ICON_SIZE}
        className={`absolute left-[${position.left}] top-${position.top} -translate-x-1/2 -translate-y-1/2`}
      />
    </button>
  );
};
