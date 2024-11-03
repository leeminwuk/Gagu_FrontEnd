import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { initializeKakaoSDK } from '@react-native-kakao/core';
import Config from 'react-native-config';
import { TextEncoder, TextDecoder } from 'text-encoding';
import messaging from '@react-native-firebase/messaging';

const kakaoSdkKey = Config.KAKAO_SDK_KEY;
if (!kakaoSdkKey) {
  throw new Error("KAKAO_SDK_KEY is not defined in the configuration.");
}

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

initializeKakaoSDK(kakaoSdkKey, true);
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

AppRegistry.registerComponent(appName, () => App);