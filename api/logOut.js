import axios from 'axios';
import Config from 'react-native-config';

const API_URL = Config.API_URL;

export default logOut = async token => {
  try {
    const response = await axios.delete(`${API_URL}/auth/log-out`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      const message = response.data.msg || '로그아웃 성공';
      return {success: true, message};
    }
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data.msg
      : error.message;
    console.error('로그아웃 실패:', errorMessage);
    return {success: false, message: errorMessage};
  }
};
