import { FC, useCallback, useEffect, useState } from 'react';
import { Textarea } from '../UI/Textarea';
import styles from './send-message-form.module.scss';
//import { useAppDispatch } from '@/store';
import { useMessages } from '@/hooks/useMessages';


export const SendMessageForm: FC = () => {
  //const dispatch = useAppDispatch
  const [text, setText] = useState('');
  const {sendMessage} = useMessages()
  const handleSendMessage = useCallback(async () => {
    if (text.trim() !== '') {
      sendMessage(text.trim());
      setText('');
    }
  }, [text]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        handleSendMessage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleSendMessage]);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div className={styles['message-form']}>
      <Textarea
        className={styles['message-textarea']}
        displayLimit={false}
        name="message-form"
        placeholder="Введите сообщение"
        value={text}
        onChange={handleTextChange}
      />
    </div>
  );
};
