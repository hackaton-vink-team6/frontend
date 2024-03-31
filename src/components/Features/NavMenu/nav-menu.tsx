import type { FC } from 'react';
import styles from './nav-menu.module.scss';
import { Pages } from '@/types';
import { useRoute } from '@/hooks/useRoute';
import { NavItem } from '../NavItem/nav-item';
import { IconType } from '@/components/UI/Icon';

const navItems = [
  [[Pages.whatsapp], 'whatsapp'],
  [[Pages.telegram], 'telegram'],
  [[Pages.chat], 'chat', 'задать вопрос'],
];

export const NavMenu: FC = () => {
  const { navigate } = useRoute();
  return (
    <>
      <div className={styles.container}>
        <ul className={styles['nav-menu']}>
          {navItems.map(([page, icon, alt]) => (
            <NavItem
              onClick={() => {
                navigate(Number(page));
              }}
              key={String(page)}
              iconName={icon as IconType}
              alt={alt}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
