import { FC } from 'react';
import classnames from 'classnames';
import { SendMessageButtonProps } from './type';
import { Button } from '@components/UI/Button';
import { Icon } from '@components/UI/Icon';
import styles from './send-message-button.module.scss';

export const SendMessageButton: FC<SendMessageButtonProps> = ({
  visible,
  onClick,
}) => {
  return (
    <div
      className={classnames(
        { [styles.visible]: visible },
        styles['send-message-button-wrapper'],
      )}
    >
      <Button className={styles['button']} onClick={onClick}>
        <Icon type="enter" />
      </Button>
    </div>
  );
};
