import { FC } from 'react';
import styles from './messages.module.scss';
import { MessageProps, MessageType } from './types';

export const Message: FC<MessageProps> = ({ children }) => {
  const { type, content, time } = children;

  const localTime = new Date(time).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'short',
  });

  return (
    <div className={styles.container}>
      {type === MessageType.message && (
        <div className={styles.message}>{content}</div>
      )}
      {type === MessageType.file && (
        <div className={styles.file}>{content}</div>
      )}
      {type === MessageType.sticker && (
        <div className={styles.sticker}>{content}</div>
      )}
      <div className={styles.date}>{localTime}</div>
    </div>
  );
};
