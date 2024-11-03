import axios from 'axios';
import Config from 'react-native-config';

const API_URL = Config.API_URL;

export const getChatRooms = async (page = 0, token) => {
  try {
    const response = await axios.get(`${API_URL}/chat/my-rooms`, {
      headers: {
        Authorization: `Bearer ${token}`,
        accept: '*/*',
      },
      params: {
        page: page,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      console.error('채팅방 목록 조회 실패:', response);
      return null;
    }
  } catch (error) {
    if (error.response) {
      console.error('Error:', error.response.data);
    } else {
      console.error('Error:', error.message);
    }
    return null;
  }
};
