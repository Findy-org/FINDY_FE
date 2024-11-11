import bar from '@/assets/icons/bar.svg?url';
import cafe from '@/assets/icons/cafe-dessert.svg?url';
import hospital from '@/assets/icons/hospital.svg?url';
import markerIcon from '@/assets/icons/marker.svg?url';
import other from '@/assets/icons/other.svg?url';
import publicIcon from '@/assets/icons/public.svg?url';
import restaurant from '@/assets/icons/restaurant.svg?url';
import shopping from '@/assets/icons/shopping.svg?url';
import travel from '@/assets/icons/travel.svg?url';

import { parseCategory } from './parseCategory';

const iconMap: Record<string, string> = {
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

export const CustomMarker = ({
  title,
  categoryName,
  shouldShowTitle,
}: {
  title: string;
  categoryName: string;
  shouldShowTitle: boolean;
}) => {
  const iconName = parseCategory(categoryName) as keyof typeof iconMap;
  const categoryIcon = iconMap[iconName] || iconMap.default;
  console.log('수정');

  const markerHTML = `
  <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;">
    <button style="position: relative;" >
      <img src="${markerIcon}" style="width: 37px; height: 47px; position: relative;" />
      <img src="${categoryIcon}" style="width: 33px; height: 100%; position: absolute; left: 50%; top: 45%; transform: translate(-50%, -50%);" />
    </button>
    <div style="width: auto; height: auto; font-size: 11px; font-weight: 600; color: black; text-shadow: 1px 1px 2px white; text-align: center; white-space: normal;">
      ${shouldShowTitle ? title : ''}
    </div>
  </div>
  `;

  return markerHTML;
};
