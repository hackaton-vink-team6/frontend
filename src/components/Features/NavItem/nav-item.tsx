import type { FC } from 'react';
import classnames from 'classnames';
import styles from './nav-item.module.scss';
import { NavButton } from '@components/UI/NavButton';
import { IconType } from '@/components/UI/Icon';

type NavItemProps = {
  onClick?: VoidFunction;
  iconName: IconType;
  className?: string;
  alt?: string;
};

export const NavItem: FC<NavItemProps> = ({ className, alt, ...rest }) => {
  return (
    <li className={classnames(styles['nav-item'], className)}>
      <NavButton {...rest} />
      {alt && <span className={styles.tooltip}>{alt}</span>}
    </li>
  );
};
