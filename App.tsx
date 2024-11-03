import React, { useEffect } from 'react';
import { LogBox, StyleSheet } from 'react-native';
import { Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { getFCMToken, setupFCMTokenRefreshListener } from './utils/getFCMToken';
import StackNavigator from './Navigator/StackNavigator';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  LogBox.ignoreLogs(['Possible unhandled','ReactImageView: Image source "null" doesn\'t exist']);
  useEffect(() => {
    const getToken = async () => {
      try {
        await getFCMToken();
        setupFCMTokenRefreshListener();
      } catch (error) {
        console.error('Error getting FCM token:', error);
      }
    };
    getToken();
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log('Foreground message received:', remoteMessage);
  
      // remoteMessage.notification이 존재하는지 확인
      if (remoteMessage.notification) {
        Alert.alert(
          remoteMessage.notification.title || '알림',
          remoteMessage.notification.body || '내용이 없습니다.'
        );
      } else {
        console.warn('Notification data is not available:', remoteMessage);
      }
    });
  
    return unsubscribe;
  }, []);
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
});

export default App;
