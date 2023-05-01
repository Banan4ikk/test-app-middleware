import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { ScreenParams, ScreenWithProps } from './ScreenParams';
import RegistrationCodeScreen from '../screens/NoAuthScreens/ConfirmCodeScreen';
import PhoneScreen from 'src/screens/NoAuthScreens/PhoneScreen';
import UserInfoScreen from '../screens/AuthScreens/UserInfoScreen';

type ScreenType = {
  component: ScreenWithProps<keyof ScreenParams>;
  options?: StackNavigationOptions;
};

type ScreenListElements = Record<string, ScreenType>;

export const noAuthScreens: ScreenListElements = {
  RegistrationCodeScreen: {
    component: RegistrationCodeScreen,
  },
  PhoneScreen: {
    component: PhoneScreen,
  },
};

export const authScreens: ScreenListElements = {
  UserScreen: {
    component: UserInfoScreen,
  },
};

export const InitialScreenNoAuth = noAuthScreens.PhoneScreen.component.name;
export const InitialScreenAuth = authScreens.UserScreen.component.name;

export const StackNavigator = createStackNavigator();
