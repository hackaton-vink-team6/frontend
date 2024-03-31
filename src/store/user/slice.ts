import { createSlice } from '@reduxjs/toolkit';
import type { UserState, IdentifyUserAction } from './types';

const initialState: UserState = {
  user: null
};

export const userSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    identifyUser: (state, action: IdentifyUserAction) => {
      state.user = action.payload;
    },
  },
});

export const { identifyUser } = userSlice.actions;

export default userSlice.reducer;
