import type { RootState } from '../types';

export const selectMessages = (state: RootState) => state.chat.messages
export const selectIsConnected = (state: RootState) => state.chat.isConnected
