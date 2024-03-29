import { Action, UserState } from '@/types';

export const initialState: UserState = { user: null };

export const userReducer = (state: UserState, action: Action): UserState => {
  switch (action.type) {
    case 'SIGN_IN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
};
