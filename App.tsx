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
    clientId: '935766045267-nsa2je178nrv3dlvq49l5ebpb1ebr38l.apps.googleusercontent.com',
    appId: '1:935766045267:android:d4b9cc3e9405739dde4ca6',
    apiKey: 'AIzaSyCPCE3yd-2HzYjhALDYCzv0VWgK_CdDtWo',
    databaseURL: '',
    storageBucket: 'test-app-notifications-2adce.appspot.com',
    messagingSenderId: '935766045267',
    projectId: 'test-app-notifications-2adce',
  };

  // Your secondary Firebase project credentials for iOS...
  const iosCredentials = {
    clientId: '935766045267-nsa2je178nrv3dlvq49l5ebpb1ebr38l.apps.googleusercontent.com',
    appId: '1:935766045267:ios:f4ef34c6dcf485c6de4ca6',
    apiKey: 'AIzaSyBYldn6HDMim5cSHvEEmHB1o9_hPyW9-GQ',
    databaseURL: '',
    storageBucket: 'test-app-notifications-2adce.appspot.com',
    messagingSenderId: '935766045267',
    projectId: 'test-app-notifications-2adce',
  };

  // Select the relevant credentials
  const credentials = Platform.OS === 'ios' ? iosCredentials : androidCredentials;

  const initApp = useCallback(async () => {
    if (!firebase.apps.length) {
      await firebase.initializeApp(credentials);
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
