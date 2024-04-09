import { type FC } from 'react';
import styles from './chat-footer.module.scss';
import { SendMessageForm } from '../SendMessageForm/send-message-form';
import { Resizer } from '../Resizer';

export const ChatFooter: FC = () => {
  return (
    <div className={styles['chat-footer']}>
      <Resizer position="center" resize="vertical" maxHeight={600}>
        <SendMessageForm />
      </Resizer>
    </div>
  );
};
