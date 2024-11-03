import axios from 'axios';
import Config from 'react-native-config';

const API_URL = Config.API_URL;

export const chatroomNumber = async (token, page = 0) => {
  try {
    const response = await axios.get(
      `${API_URL}/chat/my-rooms?page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: '*/*',
        },
      },
    );

    if (response.status === 200) {
      return response.data;
    } else {
      console.error('채팅방 조회 실패:', response);
      return null;
    }
  } catch (error) {
    console.error('채팅방 조회 요청 중 오류 발생:', error);
    return null;
  }
};