import { TMessage } from "@/components/ChatMessage";

export type ChatState = {
  isConnected: boolean;
  messages: TMessage[];
};

export type SetMessagesAction = {
  type: string;
  payload: TMessage[]
}

export type AddMessageAction = {
  type: string;
  payload: TMessage
}

export type setStatusAction = {
  type: string;
  payload: boolean
}
