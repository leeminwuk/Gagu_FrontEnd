import axios from 'axios';
import Config from 'react-native-config';

const API_URL = Config.API_URL;

export const UserInfo = async token => {
  try {
    const response = await axios.get(`${API_URL}/profile/info`, {
      headers: {
        Authorization: `Bearer ${token}`,
        accept: '*/*',
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error fetching user info:', error.response.status, error.response.data);
    } else if (error.request) {
      console.error('Error fetching user info: No response received', error.request);
    } else {
      console.error('Error fetching user info:', error.message);
    }
    throw error;
  }
};

export const UpdateUserInfo = async (token, data) => {
  try {
    const response = await axios.post(`${API_URL}/profile/user-info/reset`, {
      nickname : data.nickname || '',
      address: data.address || ''
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error updating user info:', error.response.status, error.response.data);
    } else if (error.request) {
      console.error('Error updating user info: No response received', error.request);
    } else {
      console.error('Error updating user info:', error.message);
    }
    throw error;
  }
};