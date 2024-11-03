import axios from 'axios';
import { getToken } from '../utils/storage';
import Config from 'react-native-config';

const API_URL = Config.API_URL;

export const saveEstimate = async (id, price, description) => {
  try {
    const token = await getToken();
    if (!token) {
      throw new Error('Token is missing');
    }

    const requestUrl = `${API_URL}/estimate/save`;
    console.log(`Request URL: ${requestUrl}`);

    const response = await axios.post(requestUrl, {
      id,
      price,
      description,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('Save estimate response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error saving estimate:', error);
    throw error;
  }
};