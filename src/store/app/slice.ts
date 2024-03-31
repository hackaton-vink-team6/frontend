import { createSlice } from '@reduxjs/toolkit';
import type { AppState, SetAppIsActiveAction, SwitchPageAction } from './types';
import { Pages } from '@/types';

const initialState: AppState = {
  currentPage: Pages.root,
  isActive: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppIsActive: (state, action: SetAppIsActiveAction) => {
      state.isActive = action.payload;
    },
    switchPage: (state, action: SwitchPageAction) => {
      state.currentPage = action.payload
    }
  },
});

export const { setAppIsActive, switchPage } = appSlice.actions;

export default appSlice.reducer;
