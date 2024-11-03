import axios from 'axios';
import Config from 'react-native-config';

const API_URL = Config.API_URL;

export const outChat = async (chatRoomNumber, token) => {
  try {
    const response = await axios.delete(`${API_URL}/chat/out/${chatRoomNumber}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      const message = response.data.msg || '채팅방 나가기 성공';
      return { success: true, message };
    } else {
      const message = response.data.msg || '채팅방 나가기 실패';
      return { success: false, message };
    }
  } catch (error) {
    const errorMessage = error.response ? error.response.data.msg : error.message;
    console.error('채팅방 나가기 실패:', errorMessage);
    return { success: false, message: errorMessage };
  }
};