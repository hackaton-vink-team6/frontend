import type { FC } from 'react';
import classnames from 'classnames';
import styles from './nav-button.module.scss';
import type { ButtonProps } from '@components/UI/Button';
import { Button } from '@components/UI/Button';

export const NavButton: FC<ButtonProps> = ({className, ...rest}) => {
  return (
    <Button className={classnames(styles['nav-button'], className )} {...rest}/>
  );
};
