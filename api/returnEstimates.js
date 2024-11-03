import axios from 'axios';
import { getToken } from '../utils/storage';
import Config from 'react-native-config';

const API_URL = Config.API_URL;

export const getEstimates = async (page = 0) => {
  try {
    const token = await getToken();
    console.log('Token:', token);
    if (!token) {
      throw new Error('Token is missing');
    }

    const requestUrl = `${API_URL}/estimate/estimates`;
    console.log(`Request URL: ${requestUrl}?page=${page}`);

    const response = await axios.get(requestUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      params: {
        page,
      },
    });

    console.log('Fetched estimates:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching estimates:', error);
    throw error;
  }
};