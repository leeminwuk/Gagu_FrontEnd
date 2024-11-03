import axios from 'axios';
import { getToken } from '../utils/storage';
import Config from 'react-native-config';

const API_URL = Config.API_URL;

const detailworkshop = async (workshopId) => {
  try {
    const token = await getToken();
    const response = await axios.get(`${API_URL}/profile/workshop/${workshopId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching workshop details:', error);
    throw error;
  }
};

export default detailworkshop;