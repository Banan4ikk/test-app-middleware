import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserRegistrationInfo } from './types';
import { http } from '../../services/http';

const sliceName = 'authSlice';

type InitialStateType = {
  userRegistrationInfo: UserRegistrationInfo;
  token: string;
  confirmCode: string;
};

const initialState = {
  userRegistrationInfo: {} as UserRegistrationInfo,
  token: '',
  confirmCode: '',
};

type LoginThunkType = {
  credential: string;
  code: string;
};

const login = createAsyncThunk<void, LoginThunkType>(`${sliceName}/login`, async ({ code, credential }) => {
  console.log('code', code, credential);
  const res = await http.post('login', { code, credential });
  console.log('res', res.data);
});

const authSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setConfirmCode: (state, { payload }: PayloadAction<string>) => {
      state.confirmCode = payload;
    },
    setToken: (state, { payload }: PayloadAction<string>) => {
      state.token = payload;
      localStorage.setItem('token', state.token);
    },
  },
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      console.log('payload', payload);
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      console.log('payload', payload);
    });
  },
});

export const authenticationSlice = {
  login,
};

export default authSlice;
