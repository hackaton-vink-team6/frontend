import { Pages, RouterState, Action } from '@/types';

export const initialState: RouterState = { currentPage: Pages.root };

export const routerReducer = (
  state: RouterState,
  action: Action,
): RouterState => {
  switch (action.type) {
    case 'SWITCH':
      return { currentPage: action.payload as Pages };
    case 'HOME':
      return initialState;
    default:
      return state;
  }
};
