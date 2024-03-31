import { useReducer } from 'react';
import { combineReducers } from '../store/combineReducers';
import {
  routerReducer,
  initialState as routerInitialState,
} from '@/store/router/reducer';
import {
  userReducer,
  initialState as userInitialState,
} from '@/store/user/reducer';
import {
  appReducer,
  initialState as appInitialState,
} from '@/store/app/reducer';

//export const routerInitialState: RouterState = { currentPage: Pages.root };
//export const userInitialState: UserState = { user: null };

const rootReducer = combineReducers({
  app: appReducer,
  router: routerReducer,
  user: userReducer,
});

export const useAppReducer = () => {
  const [state, dispatch] = useReducer(rootReducer, {
    app: appInitialState,
    router: routerInitialState,
    user: userInitialState,
  });

  return { state, dispatch };
};
