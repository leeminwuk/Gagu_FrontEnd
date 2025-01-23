import axios from 'axios';
import Config from 'react-native-config';
import { GetChatContentsResponse, ChatContent } from './types';

const API_URL = Config.API_URL;

export const getChatContents = async (
  roomNumber: number,
  page: number = 0,
  token: string
): Promise<ChatContent[]> => {
  try {
    const response = await axios.get<GetChatContentsResponse>(`${API_URL}/chat/contents/${roomNumber}`, {
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
  } catch (err: any) {
    console.error('채팅 내용을 불러오는 데 실패했습니다:', err.message);
    return [];
  }
};