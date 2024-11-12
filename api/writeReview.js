import axios from 'axios';
import Config from 'react-native-config';

const API_URL = Config.API_URL;

export const writeReview = async (token, reviewData) => {
  try {
    const response = await axios.post(`${API_URL}/review/write`, reviewData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      console.error('리뷰 작성 실패:', response.data);
      return null;
    }
  } catch (error) {
    if (error.response) {
      console.error('Error1:', error.response.data);
    } else {
      console.error('Error:', error.message);
    }
    return null;
  }
};