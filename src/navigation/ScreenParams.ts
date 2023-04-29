import { ParamListBase } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { FC } from 'react';

export interface ScreenParams extends ParamListBase {
  RegisterScreen: undefined;
  RegisterUserScreen: { mode: 'register' | 'enter' };
  RegistrationCodeScreen: { mode: 'register' | 'enter'; phoneNumber?: string };
  authScreen: undefined;
}

export type ScreenProps<Route extends keyof ScreenParams> = StackScreenProps<ScreenParams, Route>;
export type ScreenWithProps<Route extends keyof ScreenParams> = FC<ScreenProps<Route>>;
