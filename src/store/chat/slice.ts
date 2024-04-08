import { createSlice } from '@reduxjs/toolkit';
import type {
  AddMessageAction,
  ChatState,
  SetMessagesAction,
  setStatusAction,
} from './types';

const initialState: ChatState = {
  isConnected: false,
  messages: [
    {
      chat_id: 1,
      time: '2024-04-03T08:04:31.219Z',
      user_name: 'Алексей',
      text: 'Добрый день',
    },
  ],
};

export const chatSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMessages: (state, action: SetMessagesAction) => {
      state.messages = action.payload;
    },
    addMessage: (state, action: AddMessageAction) => {
      state.messages.push(action.payload);
    },
    setStatus: (state, action: setStatusAction) => {
      state.isConnected = action.payload;
    },
  },
});

export const { setMessages, addMessage, setStatus } = chatSlice.actions;

export default chatSlice.reducer;
