import type { RootState } from '../types';

export const selectApp = (state: RootState) => state.app
export const selectCurrentPage = (state: RootState) => state.app.currentPage
export const selectIsAppActive = (state: RootState) => state.app.isActive
