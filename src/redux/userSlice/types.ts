import { DefaultThunkResponse } from '../store';

export type UserInfo = {
  roles: Array<string>;
  emailIsConfirmed: boolean;
  phone: string;
  phoneIsConfirmed: boolean;
  is_online: boolean;
  userinfo: unknown;
};

export type FetchUserType = UserInfo & DefaultThunkResponse;

export type WithTokenType = {
  accessToken: string;
};
