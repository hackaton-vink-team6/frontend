import type { AppState } from './app/types';
import type { UserState } from './user/types';

export type RootState = {
  app: AppState;
  user: UserState;
};
