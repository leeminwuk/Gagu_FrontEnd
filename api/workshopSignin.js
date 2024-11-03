import axios from 'axios';
import { Alert } from 'react-native';
import { saveToken } from '../utils/storage';
import { getFCMToken } from '../utils/getFCMToken';
import Config from 'react-native-config';

const API_URL = Config.API_URL;

export const workshopSignin = async (email, password) => {
  const fcmtoken = await getFCMToken();
  console.log('FCM Token:', fcmtoken);

  try {
    const response = await axios.post(`${API_URL}/auth/general/sign-in`, {
      email: email,
      password: password,
      fcmtoken,
    });
    
    if (response.status === 200) {
      await saveToken(response.data.accessToken);
      return response.data; 
    } else {
      Alert.alert('로그인 오류', response.data.message || '로그인에 실패했습니다.');
      return null; 
    }
  } catch (error) {
    console.error('로그인 요청 중 오류 발생:', error);
    return null; 
  }
};