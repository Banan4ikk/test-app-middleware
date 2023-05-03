import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/slice';
import errorSlice from './errorSlice/errorSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userSlice from './userSlice/userSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { authMiddleware } from './middlewares/authMiddlware';
import { persistReducer, persistStore } from 'redux-persist';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  error: errorSlice.reducer,
  user: userSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(authMiddleware);
  },
});

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type DefaultThunkResponse = {
  ok: boolean;
  code?: number;
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector;
export const persistor = persistStore(store);

export interface AsyncAppThunkConfig {
  state: rootState;
  dispatch: AppDispatch;
}
