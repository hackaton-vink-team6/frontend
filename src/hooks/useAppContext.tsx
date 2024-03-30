import { FC, PropsWithChildren, createContext, useContext } from 'react';
import { useAppReducer } from './useAppReducer';
import type { AppContext } from '@/types';

const AppContext = createContext<AppContext>({
  state: { router: {}, user: {} },
  dispatch: () => void 0,
});

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { state, dispatch } = useAppReducer();

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
