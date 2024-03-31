import { useState, type FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { setAppIsActive } from '@/store/app/slice';
import { NavButton } from '@components/UI/NavButton';
import { NavMenu } from '@/components/Features/NavMenu/nav-menu';
import styles from './root-page.module.scss';
import { selectIsAppActive } from '@/store/app/selectors';

export const RootPage: FC = () => {
  const dispatch = useAppDispatch();
  const isAppActive = useAppSelector(selectIsAppActive);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isAppActive) {
      setIsOpen(false);
    }
  }, [isAppActive]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    dispatch(setAppIsActive(!isOpen));
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
