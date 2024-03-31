import { useState, type FC } from 'react';
import { useAppDispatch } from '@/store';
import { setAppIsActive } from '@/store/app/slice';
import { NavButton } from '@components/UI/NavButton';
import { NavMenu } from '@/components/Features/NavMenu/nav-menu';
import styles from './root-page.module.scss';

export const RootPage: FC = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    dispatch(setAppIsActive(!isOpen));
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
