import { MessageType } from '@/components/ChatMessage/type';

export const useMessages = () => {
  return {
    messages: [
      {
        id: 11,
        chat_id: 1,
        time: '2024-04-03T08:04:31.219Z',
        user_name: 'bot 1',
        text: 'Привет',
      },
      {
        id: 12,
        chat_id: 1,
        time: '2024-04-03T10:04:31.219Z',
        type: MessageType.chat_message,
        text: 'Добрый день, у меня есть вопрос',
      },
    ],
  };
};
