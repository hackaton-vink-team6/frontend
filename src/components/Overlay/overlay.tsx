import { useEffect, type FC, useRef } from 'react';
import classnames from 'classnames';
import { useAppSelector, useAppDispatch } from '@/store';
import styles from './overlay.module.scss';
import { selectIsAppActive } from '@/store/app/selectors';
import { setAppIsActive } from '@/store/app/slice';

export const Overlay: FC = () => {
  const dispatch = useAppDispatch();
  const isAppActive = useAppSelector(selectIsAppActive);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const handleClose = () => {
    dispatch(setAppIsActive(false));
  };

  const handleClickInside = (event: MouseEvent) => {
    if (overlayRef.current && overlayRef.current.contains(event.target as Node)) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickInside);

    return () => {
      document.removeEventListener('mousedown', handleClickInside);
    };
  });

  return (
    <div
      ref={overlayRef}
      className={classnames({ [styles.visible]: isAppActive }, styles.overlay)}
    />
  );
};
