import { AppState, Action } from '@/types';

export const initialState: AppState = { isActive: false };

export const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'SET_IS_ACTIVE':
      return { isActive: action.payload as boolean };
    case 'HOME':
      return initialState;
    default:
      return state;
  }
};
