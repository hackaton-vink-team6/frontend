import type { IconType } from './icons';

export type IconSize = 'default' | 'medium';

export type IconProps = {
  type: IconType;
  size?: IconSize;
  className?: string;
};
