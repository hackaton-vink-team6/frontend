export enum Pages {
  'root',
  'chat',
  'whatsapp',
  'telegram',
  'settings',
  'signup',
  'signin',
}

export type RouterState = {
  currentPage?: Pages;
};

export type UserState = {
  user?: unknown;
};

export type RootState = {
  router: RouterState;
  user: UserState;
};

export type Action = {
  type: string;
  payload?: unknown;
};

export type AppContext = {
  state: RootState ;
  dispatch: React.Dispatch<Action>;
};
