import React, { PropsWithChildren, FC } from 'react';
import { Pages } from '../types';
import { useAppSelector, useAppDispatch } from '@/store';
import { selectCurrentPage } from '@/store/app/selectors';
import { switchPage } from '@/store/app/slice';

type RouteProps = {
  path: Pages;
  component: FC;
};

export const useRoute = () => {
  const dispatch = useAppDispatch()
  const currentPage  = useAppSelector(selectCurrentPage);

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
    dispatch(switchPage(page));
  };

  return { Routes, Route, navigate };
};
