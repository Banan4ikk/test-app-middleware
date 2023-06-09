import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { authScreens, InitialScreenAuth, InitialScreenNoAuth, noAuthScreens, StackNavigator } from './screens';
import { selectToken } from '../redux/auth/selectors';
import { useSelector } from 'react-redux';

const AppNavigation = () => {
  const Navigator = StackNavigator;

  const noAuth = noAuthScreens;
  const noAuthScreensNames = Object.keys(noAuth);

  const withAuth = authScreens;
  const withAuthScreenNames = Object.keys(withAuth);

  const isToken = useSelector(selectToken);

  return (
    <NavigationContainer>
      {isToken ? (
        <Navigator.Navigator initialRouteName={InitialScreenAuth}>
          {withAuthScreenNames.map(screen => (
            <Navigator.Screen name={screen} key={screen} options={{ headerShown: false }} {...withAuth[screen]} />
          ))}
        </Navigator.Navigator>
      ) : (
        <Navigator.Navigator initialRouteName={InitialScreenNoAuth}>
          {noAuthScreensNames.map(screen => (
            <Navigator.Screen name={screen} key={screen} options={{ headerShown: false }} {...noAuth[screen]} />
          ))}
        </Navigator.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigation;
