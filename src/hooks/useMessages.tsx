import { MessageType } from '@/components/Message/types';

export const useMessages = () => {
  return {
    messages: [
      {
        chat_id: 1,
        time: '2024-04-03T08:04:31.219Z',
        type: MessageType.message,
        user_id: '11',
        user_name: 'bot 1',
        content: 'Привет',
      },
      {
        chat_id: 1,
        time: '2024-04-03T10:04:31.219Z',
        type: MessageType.message,
        user_id: '12',
        user_name: 'Татьяна',
        content: 'Добрый день, у меня есть вопрос',
      },
    ],
  };
};
