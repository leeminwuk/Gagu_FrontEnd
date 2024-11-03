import axios from 'axios';
import { getToken } from '../utils/storage';
import Config from 'react-native-config';

const API_URL = Config.API_URL;

export const getWorkshopEstimates = async (nickname, page = 0) => {
  try {
    const token = await getToken();
    if (!token) {
      throw new Error('Token is missing');
    }

    const requestUrl = `${API_URL}/estimate/workshop/${nickname}`;
    console.log(`Request URL: ${requestUrl}?page=${page}`);

    const response = await axios.get(requestUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page,
      },
    });

    console.log('Fetched workshop estimates:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching workshop estimates:', error);
    throw error;
  }
};