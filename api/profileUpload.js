import axios from 'axios';
import { Alert } from 'react-native'; 
import { getToken } from '../utils/storage';
import Config from 'react-native-config';

const API_URL = Config.API_URL;

export const uploadProfileImage = async (file) => {
  const formData = new FormData();
  formData.append('file', {
    uri: file.uri,
    type: file.type,
    name: file.name,
  });

  try {
    const response = await axios.post(`${API_URL}/auth/profile-upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      Alert.alert('이미지 업로드 오류', response.data.message || '이미지 업로드에 실패했습니다.');
      return null;
    }
  } catch (error) {
    console.error('이미지 업로드 중 오류 발생:', error);
    Alert.alert('오류', '네트워크 오류가 발생했습니다.');
    return null;
  }
};
export const updateUserProfileImage = async (file) => {
  const token = await getToken();
  const formData = new FormData();
  formData.append('file', {
    uri: file.uri,
    type: file.type,
    name: file.name,
  });

  try {
    const response = await axios.post(`${API_URL}/profile/reset`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      console.log('프로필 이미지 업데이트 성공:', response.data);
      return response.data;
    } else {
      Alert.alert('프로필 이미지 업데이트 오류', response.data.message || '프로필 이미지 업데이트에 실패했습니다.');
      return null;
    }
  } catch (error) {
    console.error('프로필 이미지 업데이트 중 오류 발생:', error);
    Alert.alert('오류', '네트워크 오류가 발생했습니다.');
    return null;
  }
};