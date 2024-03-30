import React, { PropsWithChildren, FC } from 'react';
import { Pages } from '../types';
import { useAppContext } from './useAppContext';

type RouteProps = {
  path: Pages;
  component: FC;
};

export const useRoute = () => {
  const {
    state: {
      router: { currentPage },
    },
  } = useAppContext();
  // const { currentPage } = router

  console.log('currentPage', currentPage);

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

  return { Routes, Route };
};
