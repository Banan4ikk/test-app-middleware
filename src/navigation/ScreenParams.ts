import { ParamListBase } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { FC } from 'react';

export interface ScreenParams extends ParamListBase {
  RegistrationCodeScreen: { phoneNumber: string };
  PhoneScreen: undefined;
  authScreen: undefined;
}

export type ScreenProps<Route extends keyof ScreenParams> = StackScreenProps<ScreenParams, Route>;
export type ScreenWithProps<Route extends keyof ScreenParams> = FC<ScreenProps<Route>>;
