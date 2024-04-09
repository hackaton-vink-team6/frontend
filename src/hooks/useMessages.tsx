import { MessageType } from '@/components/ChatMessage/type';
import { useAppDispatch, useAppSelector } from '@/store';
import { selectMessages } from '@/store/chat/selectors';
import { addMessage, setMessages, setStatus } from '@/store/chat/slice';
import { LocalStorageManager } from '@/utils/LocalStorageManager';
import { WebSocketClient } from '@/utils/webSocketClient';
import { useEffect } from 'react';

export const BASE_PATH = 'localhost:3333';
const uuid = new LocalStorageManager('chat-uuid');
const messagesDB = new LocalStorageManager('chat-messages');
export const WS_URL = (uuid: string | null) =>
  `wss://${BASE_PATH}/ws/chat${uuid ? `?uuid=${uuid}` : ''}`;

export const useMessages = () => {
  const messages = useAppSelector(selectMessages);
  const dispatch = useAppDispatch();

  const socket = new WebSocketClient();
  socket.init(WS_URL(uuid.getValue()));

  socket.socketMessage = ({ data }: { data: string }) => {
    const message = JSON.parse(data);
    if (message.type === MessageType.uuid) {
      uuid.setValue(message.text);
    } else {
      dispatch(addMessage(message));
    }
  };

  socket.socketError = () => {
    dispatch(setStatus(false));
  };

  socket.socketOpen = () => {
    dispatch(setStatus(true));
  };

  const sendMessage = (text: string) => {
    const newMessage = {
      time: new Date().toISOString(),
      type: MessageType.chat_message,
      text,
    };
    dispatch(addMessage(newMessage));
    socket.sendMessage(newMessage);
  };

  const fetchMessages = async () => {
    const dbMessages = messagesDB.getValue();
    dbMessages && dispatch(setMessages(dbMessages));
  };

  useEffect(() => {
    socket.connect();
    fetchMessages();
  }, []);

  return {
    messages,
    sendMessage,
  };
};
