import axios from 'axios';
import Config from 'react-native-config';

const API_URL = Config.API_URL;

export const checkWorkshop = async (page = 0, token) => {
  try {
    const response = await axios.get(
      `${API_URL}/profile/workshops?page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          accept: '*/*',
        },
      },
    );

    if (response.status === 200) {
      console.log('공방 조회 성공:', response.data);
      return response.data.content;
    } else {
      console.error('공방 조회 실패:', response);
      return null;
    }
  } catch (error) {
    console.error('공방 조회 요청 중 오류 발생:', error);
    return null;
  }
};