import { IconName } from '@/assets/icons';
import { Colors } from '@/styles/theme/colors';

export type Props = {
  /**
   * icon name to be displayed.
   */
  name: IconName;
  /**
   * color of the icon.
   * @default 'primary'
   */
  color?: Colors;
  /**
   * size of the icon.
   * @default 30
   */
  size?: number;
} & React.SVGProps<SVGSVGElement>;
