import type { AppState } from './app/types';
import type { UserState } from './user/types';
import type { ChatState } from './chat/types';

export type RootState = {
  app: AppState;
  user: UserState;
  chat: ChatState;
};
