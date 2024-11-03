import axios from 'axios';
import { getToken } from '../utils/storage';
import Config from 'react-native-config';

const API_URL = Config.API_URL;

export const checkReview = async (workshopName, page = 0, size = 10) => {
  const token = await getToken();
  if (!token) {
    console.error('Error: No token found');
    return null;
  }

  try {
    const response = await axios.get(`${API_URL}/review/${workshopName}`, {
      params: {
        page,
        size,
      },
      headers: {
        'Authorization': `Bearer ${token}`,
        'accept': '*/*',
      },
    });

    if (response.status === 200) {
      console.log('Response data:', response.data);
      return response.data;
    } else {
      console.error('Error:', response.data.message || 'Failed to fetch reviews');
      return null;
    }
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
};