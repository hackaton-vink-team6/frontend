export type MessageProps = {
  children: TMessage;
};

export enum MessageType {
  file,
  message,
  sticker,
  get_old,
  user_connected,
  typing,
}

export type TMessage = {
  chat_id: number;
  time: string;
  type: MessageType;
  user_id: string;
  content: string;
  file?: {
    id: number;
    user_id: number;
    path: string;
    filename: string;
    content_type: string;
    content_size: number;
    upload_date: string;
  };
};
