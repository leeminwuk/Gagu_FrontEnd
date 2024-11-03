import axios from 'axios';
import { getToken } from '../utils/storage';
import Config from 'react-native-config';

const API_URL = Config.API_URL;

export const uploadFile = async (file) => {
  const token = await getToken();
  if (!token) {
    console.error('Error: No token found');
    return null;
  }

  const formData = new FormData();
  const fileName = `${Date.now()}_${file.name || 'image.jpg'}`;
  formData.append('file', {
    uri: file.uri,
    type: file.type,
    name: fileName,
  });

  try {
    const response = await axios.post(`${API_URL}/file/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
      },
    });

    console.log('Uploaded response:', response.data);

    if (response.status === 200) {
      return response.data || null; 
    } else {
      console.error('이미지 업로드 오류:', response.data.message || '이미지 업로드에 실패했습니다.');
      return null;
    }
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
};