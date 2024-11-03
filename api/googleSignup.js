import { Alert } from 'react-native';
import axios from 'axios';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { getFCMToken } from '../utils/getFCMToken'; 
import { saveToken } from '../utils/storage';
import Config from 'react-native-config';

const API_URL = Config.API_URL;

GoogleSignin.configure({
  webClientId: Config.WEB_CLIENT_ID,
  iosClientId: Config.IOS_CLIENT_ID,
});

export const onPressGoogleBtn = async setModalVisible => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const fcmtoken = await getFCMToken(); 

    const requestBody = {
      name: userInfo.user.name,
      profileUrl: userInfo.user.photo,
      email: userInfo.user.email,
      fcmtoken, 
    };
    console.log('Request Body:', requestBody); 

    const response = await axios.post(
      `${API_URL}/auth/google/sign`,
      requestBody,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (response.status === 200) {
      await saveToken(response.data.accessToken);
      return true;
    } else {
      console.error('Server error:', response.status);
    }
  } catch (error) {
    console.error('Google 로그인 에러:', error);
    Alert.alert('로그인 실패', '로그인에 실패하였습니다. 다시 시도해주세요.');
    return false;
  }
};