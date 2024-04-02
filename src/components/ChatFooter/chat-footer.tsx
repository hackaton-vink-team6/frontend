import { type FC } from 'react';
import styles from './chat-footer.module.scss';
import { MessageForm } from '../MessageForm/message-form';
import { Resizer } from '../Resizer';

export const ChatFooter: FC = () => {
  return (
    <div className={styles.container}>
      <Resizer position="center" resize="vertical" maxHeight={600}>
        <MessageForm />
      </Resizer>
    </div>
  );
};
