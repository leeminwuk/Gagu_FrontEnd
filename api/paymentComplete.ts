import axios from 'axios';
import Config from 'react-native-config';

const API_URL = 'https://gagu.me';

export const sendPaymentComplete = async (paymentId: string, token: string) => {
  try {
    console.log('보내는 요청:', {
      url: `${API_URL}/payment/complete`,
      headers: {
        'Accept': '*/*',
        'Authorization': token, // 'Bearer' 접두사를 추가하지 않음
        'Content-Type': 'application/json',
      },
      body: { paymentId },
    });

    const response = await axios.post(
      `${API_URL}/payment/complete`,
      { paymentId },
      {
        headers: {
          'Accept': '*/*',
          'Authorization': token, // 'Bearer' 접두사를 추가하지 않음
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status !== 200) {
      throw new Error('서버 응답이 올바르지 않습니다.');
    }

    return response.data;
  } catch (error) {
    console.error('결제 완료 정보 전송 중 오류 발생:', error);
    throw error;
  }
};