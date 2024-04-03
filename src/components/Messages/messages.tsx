import { FC, PropsWithChildren } from 'react';
import styles from './messages.module.scss';
import { Message, type TMessage } from '@components/Message';
import { useMessages } from '@/hooks/useMessages';

export const Messages: FC<PropsWithChildren> = () => {
  const { messages } = useMessages();

  return (
    <div className={styles.container}>
      {messages.map((message: TMessage) => (
        <Message key={message.time}>{message}</Message>
      ))}
    </div>
  );
};
