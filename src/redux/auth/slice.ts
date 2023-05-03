import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ConfirmPhoneType, DecodeJWTType, LoginThunkType, PublicKeyThunkType, ResponseUserLogin } from './types';
import { http } from '../../services/http';
import { AsyncAppThunkConfig, DefaultThunkResponse } from '../store';
import jwt_decode from 'jwt-decode';

const sliceName = 'authSlice';

type InitialStateType = {
  token: string;
  refreshToken: string;
  confirmCode: string;
  uid: string;
  roles: string[];
  publicKey: string;
  pushToken: string | null;
};

const initialState: InitialStateType = {
  token: '',
  refreshToken: '',
  confirmCode: '',
  uid: '',
  publicKey: '',
  roles: [],
  pushToken: null,
};

const login = createAsyncThunk<ResponseUserLogin, LoginThunkType>(
  `${sliceName}/login`,
  async ({ code, credential }) => {
    const { data } = await http.post('login', { code, credential });
    return data;
  },
);

const logout = createAsyncThunk<DefaultThunkResponse, void, AsyncAppThunkConfig>(
  `${sliceName}/logout`,
  async (_, { getState }) => {
    const {
      auth: { refreshToken },
    } = getState();
    console.log('refresh token', refreshToken);
    const { data } = await http.post('logout', { refreshToken });
    return data;
  },
);

const getPublicKey = createAsyncThunk<PublicKeyThunkType, void>(`${sliceName}/getPublicKey`, async () => {
  const { data } = await http.post('getPublicKey');
  return data;
});

const confirmCode = createAsyncThunk<DefaultThunkResponse, ConfirmPhoneType>(
  `${sliceName}/confirmCode`,
  async ({ phone }) => {
    getPublicKey();
    const { data } = await http.post('sendConfirmCode', { phone });
    return data;
  },
);
const authSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setPushToken: (state, { payload }: PayloadAction<{ pushToken: string }>) => {
      state.pushToken = payload.pushToken;
    },
    logout: state => {
      state.token = '';
    },
    setUserInfo: (state, { payload }: PayloadAction<{ uid: string; roles: Array<string> }>) => {
      state.uid = payload.uid;
      state.roles = payload.roles;
    },
  },
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      // state.uid = decode.sub;
      // state.roles = decode.roles;
      state.token = payload.accessToken;
      state.refreshToken = payload.refreshToken;
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      console.log('rejected');
    });
    builder.addCase(getPublicKey.fulfilled, (state, { payload }) => {
      state.publicKey = payload.n;
    });
  },
});

export const authenticationSlice = {
  confirmCode,
  login,
  logout,
};

export default authSlice;
