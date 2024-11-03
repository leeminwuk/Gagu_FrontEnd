import axios from 'axios';
import { Alert } from 'react-native';
import { uploadProfileImage } from './profileUpload';
import { getFCMToken } from '../utils/getFCMToken';
import Config from 'react-native-config';

const API_URL = Config.API_URL;
export const workshopSignup = async ({ email, password, profileUrl, workShopName, profileMessage }) => {
  try {
    // 프로필 이미지 업로드
    const uploadResponse = await uploadProfileImage({
      uri: profileUrl.uri,
      type: 'image/jpeg', 
      name: 'profile.jpg', 
    });

    if (uploadResponse) {
      // 업로드된 이미지 URL을 사용
      const updatedProfileUrl = uploadResponse;

      const fcmtoken = await getFCMToken();

      const requestBody = {
        email,
        password,
        profileUrl: updatedProfileUrl,
        workShopName,
        profileMessage,
        fcmtoken,
      };

      // 이미지 업로드 성공 후 회원가입 요청
      const response = await axios.post(`${API_URL}/auth/general/sign-up`, requestBody, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        return response.data;
      } else {
        Alert.alert('회원가입 오류', response.data.message || '회원가입에 실패했습니다.');
        return null;
      }
    } else {
      console.log('이미지 업로드 실패');
      Alert.alert('이미지 업로드 오류', '이미지 업로드에 실패했습니다.');
      return null;
    }
  } catch (error) {
    console.error('요청 중 오류 발생:', error);
    Alert.alert('오류', '네트워크 오류가 발생했습니다.');
    return null;
  }
};