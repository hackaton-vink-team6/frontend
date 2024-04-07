export type MessageProps = {
  children: TMessage;
};

export enum MessageType {
  uuid,
  chat_message,
  is_typing,
}

export type TMessage = {
  chat_id: number;
  time: string;
  type?: MessageType;
  user_name?: string;
  text: string;
};
