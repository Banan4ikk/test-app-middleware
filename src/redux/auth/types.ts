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

export type DecodeJWTType = {
  exp: string;
  roles: Array<string>;
  sub: string;
};

export type PublicKeyThunkType = DefaultThunkResponse & {
  kty: string;
  e: string;
  n: string;
};
