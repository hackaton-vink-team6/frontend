export const combineReducers = <S, A extends { type: string }>(
  reducers: { [K in keyof S]: (state: S[K], action: A) => S[K] }
) => (state: S, action: A) => {
  return Object.keys(reducers).reduce((acc, key) => {
    const newStateKey = key as keyof S;
    acc[newStateKey] = reducers[newStateKey](state[newStateKey], action);
    return acc;
  }, {} as S);
};
