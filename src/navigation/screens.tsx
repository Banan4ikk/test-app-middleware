import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import RegisterScreen from '../screens/NoAuthScreens/RegisterStartScreen';
import { ScreenParams, ScreenWithProps } from './ScreenParams';
import RegisterUserScreen from '../screens/NoAuthScreens/RegisterUserScreen';
import RegistrationCodeScreen from '../screens/NoAuthScreens/ConfirmCodeScreen';

type ScreenType = {
  component: ScreenWithProps<keyof ScreenParams>;
  options?: StackNavigationOptions;
};

type ScreenListElements = Record<string, ScreenType>;

export const noAuthScreens: ScreenListElements = {
  RegisterScreen: {
    component: RegisterScreen,
  },
  UserDataRegisterScreen: {
    component: RegisterUserScreen,
  },
  RegistrationCodeScreen: {
    component: RegistrationCodeScreen,
  },
};

export const authScreens: ScreenListElements = {
  authScreen: {
    component: <></>,
  },
};

export const InitialScreenNoAuth = noAuthScreens.RegisterScreen;
export const InitialScreenAuth = authScreens.authScreen;

export const StackNavigator = createStackNavigator();
