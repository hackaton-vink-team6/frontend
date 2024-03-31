import { useRef, type FC } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useAppSelector } from '@/store';
import styles from './overlay.module.scss';
import { selectIsAppActive } from '@/store/app/selectors';

export const Overlay: FC = () => {
  const isAppActive = useAppSelector(selectIsAppActive);
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isAppActive}
      timeout={3000}
      classNames="fade"
    >
      <div ref={nodeRef} className={styles.overlay} />
    </CSSTransition>
  );
};
