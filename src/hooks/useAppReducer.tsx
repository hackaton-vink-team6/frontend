import { useReducer } from 'react';
import { combineReducers } from '../store/combineReducers';
import { routerReducer } from '@/store/router/reducer';
import { userReducer } from '@/store/user/reducer';
import { Pages, RouterState, UserState } from '@/types';


export const routerInitialState: RouterState = { currentPage: Pages.root };
export const userInitialState: UserState = { user: null };

const rootReducer = combineReducers({
  router: routerReducer,
  user: userReducer,
});

export const useAppReducer = () => {
  const [state, dispatch] = useReducer(rootReducer, {
    router: routerInitialState,
    user: userInitialState,
  });

  return { state, dispatch };
};
