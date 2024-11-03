import axios from 'axios';
import { Alert } from 'react-native';
import { getToken } from '../utils/storage';
import Config from 'react-native-config';

const API_URL = Config.API_URL;

// 2D 이미지를 3D 이미지로 변환하는 함수
export const convert2DTo3D = async (imageUrl) => {
  const token = await getToken();
  if (!token) {
    Alert.alert('오류', '토큰을 불러오지 못했습니다.');
    return null;
  }

  try {
    const formData = new FormData();
    formData.append('file', {
      uri: imageUrl,
      type: 'image/jpeg', 
      name: 'image.jpeg', 
    });

    const response = await axios.post(`${API_URL}/image/3d`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      const { glbUrl, gltfUrl } = response.data;
      console.log('3D 이미지 변환 성공:');
      console.log('GLB 파일 경로:', glbUrl);
      console.log('GLTF 파일 경로:', gltfUrl);
      return response.data;
    } else {
      console.log('API 응답 오류:', response.data);
      Alert.alert('3D 이미지 변환 오류', response.data.msg || '3D 이미지 변환에 실패했습니다.');
      return null;
    }
  } catch (error) {
    console.error('API 요청 중 오류 발생:', error);
    if (error.response) {
      console.error('응답 데이터:', error.response.data);
      if (error.response.status === 401) {
        Alert.alert('인증 오류', error.response.data.msg || '토큰이 유효하지 않거나 만료되었습니다.');
      } else if (error.response.status === 400) {
        Alert.alert('요청 오류', error.response.data.msg || '요청 데이터가 잘못되었습니다.');
      } else {
        Alert.alert('오류', '네트워크 오류가 발생했습니다.');
      }
    } else {
      Alert.alert('오류', '네트워크 오류가 발생했습니다.');
    }
    return null;
  }
};