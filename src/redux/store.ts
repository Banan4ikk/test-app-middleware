import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/slice';
import { useDispatch } from 'react-redux';
import { authMiddleware } from './middlewares/authMiddlware';
import errorSlice from './errorSlice/errorSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    error: errorSlice.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(authMiddleware);
  },
});

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type DefaultThunkResponse = {
  ok: boolean;
  code?: number;
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
