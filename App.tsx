import { Platform, StyleSheet, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';
import { useAppFonts } from './src/hooks/useAppFonts';
import AppNavigation from './src/navigation/Navigation';
import { Provider } from 'react-redux';
import { persistor, store, useAppDispatch } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import messaging, { firebase } from '@react-native-firebase/messaging';
import authSlice from './src/redux/auth/slice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const Root = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const { fontsLoaded } = useAppFonts();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (fontsLoaded) {
      setAppIsReady(true);
    }
  }, [fontsLoaded]);

  // Your secondary Firebase project credentials for Android...
  const androidCredentials = {
    clientId: '508700549373-038t2i7jb3efseafg0ap7nebnvaias46.apps.googleusercontent.com',
    appId: '1:508700549373:android:df0dfa128b64abb90c9e94',
    apiKey: '"AIzaSyB-xHXdllJ08fzZKhZBj7zLQ8Vg8dhVDKQ',
    databaseURL: '',
    storageBucket: 'webdevep-test.appspot.com',
    messagingSenderId: '935766045267',
    projectId: 'webdevep-test',
  };

  // Select the relevant credentials
  // const credentials = Platform.OS === 'ios' ? iosCredentials : androidCredentials;

  const initApp = useCallback(async () => {
    if (!firebase.apps.length && Platform.OS === 'android') {
      await firebase.initializeApp(androidCredentials);
    } else {
      return firebase.app();
    }
  }, []);

  const pushNotifications = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      await messaging().registerDeviceForRemoteMessages();
      const token = await messaging().getToken();
      if (token) {
        dispatch(authSlice.actions.setPushToken({ pushToken: token }));
        console.log('token', token);
      }
    }
  };

  useEffect(() => {
    initApp().then(Promise.resolve);
    pushNotifications().then(Promise.resolve);
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('FCM message arrived 101!', JSON.stringify(remoteMessage));
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('App Open By Clicking Notification', remoteMessage.notification);
    });

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log('Notification caused app to open from quit state:', remoteMessage);
        }
      });

    return unsubscribe;
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.root} onLayout={onLayoutRootView}>
      <AppNavigation />
    </View>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
};

export default App;
