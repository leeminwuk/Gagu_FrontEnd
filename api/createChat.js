import axios from 'axios';
import {chatroomNumber} from './chatroomNumber';
import Config from 'react-native-config';

const API_URL = Config.API_URL;

export const createChatRoom = async ( sellerNickname, token) => {
  try {
    const response = await axios.post(
      `${API_URL}/chat/new`,
      {
        sellerNickname,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (response.status === 200) {
      console.log('채팅방 생성 성공:', response.data);
      const chatRoomInfo = await chatroomNumber(token);
      return response.data;
    } else {
      console.error('채팅방 생성 실패:', response);
      return null;
    }
  } catch (error) {
    console.error('채팅방 생성 요청 중 오류 발생:', error);
    return null;
  }
};

