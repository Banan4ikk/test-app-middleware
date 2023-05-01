import { DefaultThunkResponse } from '../store';

export type LoginThunkType = {
  credential: string;
  code: string;
};

export type ConfirmPhoneType = {
  phone: string;
};

export type ResponseUserLogin = DefaultThunkResponse & {
  accessToken: string;
  refreshToken: string;
};
