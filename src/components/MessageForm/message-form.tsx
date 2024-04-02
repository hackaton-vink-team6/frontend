import { Textarea } from '../UI/Textarea';
import styles from './message-form.module.scss';

export const MessageForm = () => {
  return (
    <div className={styles.container}>
      <Textarea
        displayLimit={false}
        name="message-form"
        placeholder="Введите сообщение"
      />
    </div>
  );
};
