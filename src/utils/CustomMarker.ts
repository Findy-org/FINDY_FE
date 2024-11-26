import bar from '@/assets/icons/bar.svg?url';
import cafe from '@/assets/icons/cafe-dessert.svg?url';
import hospital from '@/assets/icons/hospital.svg?url';
import markerIcon from '@/assets/icons/marker.svg?url';
import other from '@/assets/icons/other.svg?url';
import publicIcon from '@/assets/icons/public.svg?url';
import restaurant from '@/assets/icons/restaurant.svg?url';
import shopping from '@/assets/icons/shopping.svg?url';
import travel from '@/assets/icons/travel.svg?url';
import { Category } from '@/types/naver';

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
  categoryName: string | Category;
  shouldShowTitle: boolean;
}) => {
  const category = typeof categoryName === 'object' ? categoryName.majorCategory : categoryName;
  const iconName = parseCategory(category as string) as keyof typeof iconMap;
  const categoryIcon = iconMap[iconName] || iconMap.default;

  const markerHTML = `
  <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;">
    <button style="position: relative; display: flex; flex-direction: column; align-items: center;" >
      <object data="${markerIcon}" type="image/svg+xml" style="width: 37px; height: 47px;"></object>
      <object data="${categoryIcon}" type="image/svg+xml" style="width: 33px; height: 33px; position: absolute; left: 50%; top: 45%; transform: translate(-50%, -50%);"></object>
    </button>
    <span style="display: block; font-size: 12px; font-weight: 400; color: black; text-align: center; white-space: normal; margin-top: 4px;">
      ${shouldShowTitle ? title : ''}
    </span>
  </div>
  `;

  return markerHTML;
};
