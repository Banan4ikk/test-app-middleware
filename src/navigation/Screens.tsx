import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import RegisterScreen from '../screens/NoAuthScreens/RegisterStartScreen';
import { ScreenParams, ScreenWithProps } from './ScreenParams';
import RegisterUserScreen from '../screens/NoAuthScreens/RegisterUserScreen';
import RegistrationCodeScreen from '../screens/NoAuthScreens/RegistrationCodeScreen';

type ScreenType = {
  component: ScreenWithProps<keyof ScreenParams>;
  options?: StackNavigationOptions;
};

type ScreenListElements = Record<string, ScreenType>;

export const screens: ScreenListElements = {
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

export const InitialScreen = screens.RegisterScreen;

export const StackNavigator = createStackNavigator();
