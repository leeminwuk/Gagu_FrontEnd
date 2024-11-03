import axios from 'axios';
import { getToken } from '../utils/storage';
import Config from 'react-native-config';

const API_URL = Config.API_URL;

export const getWorkshopProfile = async (id) => {
  try {
    const token = await getToken();
    if (!token) {
      throw new Error('Token is missing');
    }

    const requestUrl = `${API_URL}/profile/workshop/${id}`;
    const response = await axios.get(requestUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching workshop profile:', error);
    throw error;
  }
};