import { useState, type FC } from 'react';
import styles from './root-page.module.scss';
import { NavButton } from '@components/UI/NavButton';
import { NavMenu } from '@/components/Features/NavMenu/nav-menu';

export const RootPage: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      {isOpen && <NavMenu />}
      <NavButton
        className={styles['main-nav-button']}
        iconName={isOpen ? 'close' : 'chat'}
        onClick={toggleMenu}
      />
    </div>
  );
};
