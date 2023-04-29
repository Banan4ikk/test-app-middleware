import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { InitialScreen, screens, StackNavigator } from './Screens';

const AppNavigation = () => {
  const Navigator = StackNavigator;
  const allScreens = screens;
  const screensNames = Object.keys(allScreens);
  const initialScreen = Object.keys(InitialScreen)[0];

  return (
    <NavigationContainer>
      <Navigator.Navigator initialRouteName={initialScreen}>
        {screensNames.map(screen => (
          <Navigator.Screen name={screen} key={screen} options={{ headerShown: false }} {...allScreens[screen]} />
        ))}
      </Navigator.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
