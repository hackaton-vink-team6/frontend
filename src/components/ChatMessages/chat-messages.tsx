import { FC, PropsWithChildren } from 'react';
import { useMessages } from '@/hooks/useMessages';
import { ChatMessage, type TMessage } from '@components/ChatMessage';
import styles from './chat-messages.module.scss';

export const Messages: FC<PropsWithChildren> = () => {
  const { messages } = useMessages();

  return (
    <ul className={styles.messages}>
      {messages.map((message: TMessage) => (
        <ChatMessage key={message.time}>{message}</ChatMessage>
      ))}
    </ul>
  );
};
