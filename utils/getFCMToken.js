import messaging from '@react-native-firebase/messaging';
import { Platform } from 'react-native';
import { saveFCMToken, getFCMToken as getStoredFCMToken } from './storage';

// FCM 토큰 발급 함수
export const getFCMToken = async () => {
  try {
    // 저장된 FCM 토큰 불러오기
    const storedToken = await getStoredFCMToken();
    if (storedToken) {
      console.log('Stored FCM 토큰:', storedToken);
      return storedToken;
    }

    // 권한 요청
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (!enabled) {
      console.log('푸시 알림 권한이 없습니다.');
      return null;
    }

    // 디바이스를 원격 메시지에 등록
    await messaging().registerDeviceForRemoteMessages();

    // iOS에서 APNS 토큰 설정
    if (Platform.OS === 'ios') {
      const apnsToken = await messaging().getAPNSToken();
      if (apnsToken) {
        console.log('APNS 토큰:', apnsToken);
      } else {
        console.log('APNS 토큰을 가져오지 못했습니다.');
      }
    }

    // FCM 토큰 발급
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log('FCM 토큰:', fcmToken);
      await saveFCMToken(fcmToken); // FCM 토큰 저장
      return fcmToken;
    } else {
      console.log('FCM 토큰을 가져오지 못했습니다.');
      return null;
    }
  } catch (error) {
    console.error('FCM 토큰 발급 중 오류 발생:', error);
    return null;
  }
};

// 토큰 갱신 리스너 설정
export const setupFCMTokenRefreshListener = () => {
  messaging().onTokenRefresh(async (fcmToken) => {
    console.log('FCM 토큰 갱신:', fcmToken);
    await saveFCMToken(fcmToken); // 갱신된 토큰 저장
  });
};