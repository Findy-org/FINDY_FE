import { Icons } from '@/assets/icons';
import { colors } from '@/styles/theme/colors';

import { Props } from './Icon.types';

export const Icon = ({ name, color = 'primary', size = 30, ...props }: Props) => {
  const SvgIcon = Icons[name];

  return (
    <SvgIcon width={`${size}px`} height={`${size}px`} color={colors[color] as string} {...props} />
  );
};
