import React, { PropsWithChildren, FC } from 'react';
import { Pages } from '../types';
import { useAppContext } from './useAppContext';

type RouteProps = {
  path: Pages;
  component: FC;
};

export const useRoute = () => {
  const {
    dispatch,
    state: {
      router: { currentPage },
    },
  } = useAppContext();

  const Route: FC<RouteProps> = ({ component: Component }) => <Component />;

  const Routes: FC<PropsWithChildren> = ({ children }) => {
    return (
      <>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return child.props.path === currentPage ? child : null;
          }
          return null;
        })}
      </>
    );
  };

  const navigate = (page: Pages) => {
    dispatch({ type: 'SWITCH', payload: page });
  };

  return { Routes, Route, navigate };
};
