import { Icons } from '@/assets/icons';
import { colors } from '@/styles/theme/colors';

import { Props } from './Icon.types';

export const Icon = ({ name, color = 'primary', size = 30, ...props }: Props) => {
  const SvgIcon = Icons[name];

  const colorValue =
    typeof color === 'string' && color.startsWith('gray') ? colors[color][400] : colors[color];

  return (
    <SvgIcon width={`${size}px`} height={`${size}px`} color={colorValue as string} {...props} />
  );
};
