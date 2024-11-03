import { Alert } from 'react-native';
import { getFCMToken } from '../utils/getFCMToken';
import Config from 'react-native-config';
import axios from 'axios';
import { login, me } from '@react-native-kakao/user';
import { saveToken, saveNickname } from '../utils/storage';

const API_URL = Config.API_URL;

export const handleLogin = async () => {
  try {
    const loginResult = await login({
      useKakaoAccountLogin: true,
    });
    const userInfo = await me();
    await sendKakaoLoginResultToServer(userInfo);
    return 'success';
  } catch (error) {
    Alert.alert('로그인 실패', '로그인에 실패하였습니다. 다시 시도해주세요.');
    console.error('카카오 로그인 에러:', error);
    return false; 
  }
};

const sendKakaoLoginResultToServer = async (kakaoLoginResult) => {
  try {
    const { id: resourceId, nickname: name, profileImageUrl: profileUrl, email } = kakaoLoginResult;
    const fcmtoken = await getFCMToken(); 

    const requestBody = { resourceId, name, profileUrl, email, fcmtoken }; 
    
    const response = await axios.post(
      `${API_URL}/auth/kakao/sign`,
      requestBody, 
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    await saveToken(response.data.accessToken);
    await saveNickname(response.data.nickname);
    
    console.log('카카오 로그인 성공:', response.data);
  } catch (error) {
    console.error('서버로의 로그인 결과 전송 실패:', error);
  }
};