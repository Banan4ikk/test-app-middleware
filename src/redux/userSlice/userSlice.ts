import { FetchUserType, UserInfo, WithTokenType } from './types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { http } from '../../services/http';
import { longPressGestureHandlerProps } from 'react-native-gesture-handler/lib/typescript/handlers/LongPressGestureHandler';

const sliceName = 'userSlice';

type InitialState = {
  userInfo: UserInfo | null;
};

const initialState: InitialState = {
  userInfo: null,
};

const fetchUserInfo = createAsyncThunk<FetchUserType, WithTokenType>(
  `${sliceName}/fetchUserInfo`,
  async ({ accessToken }) => {
    const { data } = await http.post('getUserInfo', { accessToken });
    return data;
  },
);

const userSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUserInfo.fulfilled, (state, { payload }) => {
      state.userInfo = payload;
    });
  },
});

export default userSlice;

export const user = {
  fetchUserInfo,
};
