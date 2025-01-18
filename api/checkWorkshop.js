import axios from 'axios';
import Config from 'react-native-config';

const API_URL = Config.API_URL;

export const checkWorkshop = async (page = 0, filtertype = 'POPULAR', token) => {
  try {
    const url = `${API_URL}/profile/workshops?filtertype=${filtertype}&page=${page}`;
    const headers = {
      Authorization: `Bearer ${token}`, // Bearer 접두사 포함
      accept: '*/*',
    };

    console.log('요청 URL:', url);
    console.log('요청 헤더:', headers);

    const response = await axios.get(url, { headers });

    console.log('응답 상태 코드:', response.status);
    console.log('응답 데이터:', JSON.stringify(response.data, null, 2));

    if (response.status === 200) {
      console.log('공방 조회 성공:', response.data);
      return response.data.content; // 응답 데이터의 content 반환
    } else {
      console.error('공방 조회 실패:', response);
      return null;
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.error('인증 오류 발생:', error.response.data);
      throw new Error('Unauthorized');
    } else {
      console.error('공방 조회 요청 중 오류 발생:', error);
      throw error;
    }
  }
};