import markerIcon from '@/assets/icons/marker.svg';

import { parseCategory } from './parseCategory';

export const CustomMarker = ({
  title,
  categoryName,
  shouldShowTitle,
}: {
  title: string;
  categoryName: string;
  shouldShowTitle: boolean;
}) => {
  const iconName = parseCategory(categoryName);

  const markerHTML = `
  <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;">
    <button style="position: relative;" >
      <img src="${markerIcon}" style="width: 40px; height: 50px; position: relative;" />
      <img src="/src/assets/icons/${iconName}.svg" style="width: 33px; height: 33px; position: absolute; left: 50%; top: 45%; transform: translate(-50%, -50%);" />
    </button>
    <div style="width: auto; height: auto; font-size: 11px; font-weight: 600; color: black; text-shadow: 1px 1px 2px white; text-align: center; white-space: normal;">
      ${shouldShowTitle ? title : ''}
    </div>
  </div>
  `;

  return markerHTML;
};
