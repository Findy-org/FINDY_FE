import bar from '@/assets/icons/bar.svg';
import cafe from '@/assets/icons/cafe-dessert.svg';
import hospital from '@/assets/icons/hospital.svg';
import markerIcon from '@/assets/icons/marker.svg';
import other from '@/assets/icons/other.svg';
import publicIcon from '@/assets/icons/public.svg';
import restaurant from '@/assets/icons/restaurant.svg';
import shopping from '@/assets/icons/shopping.svg';
import travel from '@/assets/icons/travel.svg';

import { parseCategory } from './parseCategory';

const iconMap = {
  bar,
  cafe,
  hospital,
  other,
  public: publicIcon,
  restaurant,
  shopping,
  travel,
  default: other,
};

type IconMapKeys = keyof typeof iconMap;

export const CustomMarker = ({
  title,
  categoryName,
  shouldShowTitle,
}: {
  title: string;
  categoryName: string;
  shouldShowTitle: boolean;
}) => {
  const iconName = parseCategory(categoryName) as IconMapKeys;
  const categoryIcon = iconMap[iconName] || iconMap.default;

  const markerHTML = `
  <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;">
    <button style="position: relative;" >
      <img src="${markerIcon}" style="width: 40px; height: 50px; position: relative;" />
      <img src="${categoryIcon}" style="width: 33px; height: 33px; position: absolute; left: 50%; top: 45%; transform: translate(-50%, -50%);" />
    </button>
    <div style="width: auto; height: auto; font-size: 11px; font-weight: 600; color: black; text-shadow: 1px 1px 2px white; text-align: center; white-space: normal;">
      ${shouldShowTitle ? title : ''}
    </div>
  </div>
  `;

  return markerHTML;
};
