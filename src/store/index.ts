import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState } from './types';
import appReducer from './app/slice';
import userReducer from './user/slice';
import chatReducer from './chat/slice';


export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    chat: chatReducer,
  }
});

export type AppDispatch = typeof store.dispatch;

/** Типизированный хук диспетчера, использовать его в компонентах. */
export const useAppDispatch: () => AppDispatch = useDispatch;

/** Типизированный хук селектора, использовать его в компонентах. */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
