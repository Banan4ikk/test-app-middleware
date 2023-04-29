import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware();
  },
});

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
