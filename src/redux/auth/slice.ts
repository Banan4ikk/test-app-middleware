import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ConfirmPhoneType, LoginThunkType, ResponseUserLogin } from './types';
import { http } from '../../services/http';

const sliceName = 'authSlice';

type InitialStateType = {
  token: string;
  refreshToken: string;
  confirmCode: string;
};

const initialState = {
  token: '',
  refreshToken: '',
  confirmCode: '',
};

const login = createAsyncThunk<ResponseUserLogin, LoginThunkType>(
  `${sliceName}/login`,
  async ({ code, credential }) => {
    const { data } = await http.post('login', { code, credential });
    return data;
  },
);

const confirmCode = createAsyncThunk<void, ConfirmPhoneType>(`${sliceName}/confirmCode`, async ({ phone }) => {
  const { data } = await http.post('sendConfirmCode', { phone });
  return data;
});

const authSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      console.log('payload', payload);
      state.token = payload.accessToken;
      state.refreshToken = payload.refreshToken;
    });
  },
});

export const authenticationSlice = {
  confirmCode,
  login,
};

export default authSlice;
