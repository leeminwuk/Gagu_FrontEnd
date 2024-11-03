import axios from 'axios';
import Config from 'react-native-config';

const API_URL = Config.API_URL;

export const getChatContents = async (roomNumber, page = 0, token) => {
  try {
    const response = await axios.get(`${API_URL}/chat/contents/${roomNumber}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        accept: '*/*',
      },
      params: {
        page: page,
      },
    });

    if (response.status === 200) {
      return response.data.content || []; 
    } else {
      throw new Error('채팅 내용을 불러오는 데 실패했습니다.');
    }
  } catch (err) {
    console.error('채팅 내용을 불러오는 데 실패했습니다:', err.message);
    return []; 
  }
  
};