import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { authScreens, InitialScreenAuth, InitialScreenNoAuth, noAuthScreens, StackNavigator } from './screens';
import { selectToken } from '../redux/auth/selectors';
import { useSelector } from 'react-redux';

const AppNavigation = () => {
  const Navigator = StackNavigator;
  const noAuth = noAuthScreens;
  const noAuthScreensNames = Object.keys(noAuth);
  const noAuthInitialScreen = Object.keys(InitialScreenNoAuth)[0];

  const withAuth = authScreens;
  const withAuthScreenNames = Object.keys(withAuth);
  const initialScreenWithAuth = Object.keys(InitialScreenAuth)[0];

  const isToken = useSelector(selectToken);

  return (
    <NavigationContainer>
      {isToken ? (
        <Navigator.Navigator initialRouteName={initialScreenWithAuth}>
          {withAuthScreenNames.map(screen => (
            <Navigator.Screen name={screen} key={screen} options={{ headerShown: false }} {...withAuth[screen]} />
          ))}
        </Navigator.Navigator>
      ) : (
        <Navigator.Navigator initialRouteName={noAuthInitialScreen}>
          {noAuthScreensNames.map(screen => (
            <Navigator.Screen name={screen} key={screen} options={{ headerShown: false }} {...noAuth[screen]} />
          ))}
        </Navigator.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigation;
