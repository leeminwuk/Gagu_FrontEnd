import axios from 'axios';
import Config from 'react-native-config';

const API_URL = Config.API_URL;

const getFurniture = async (page = 0, token) => {
  try {
    const response = await axios.get(`${API_URL}/estimate/get-furniture?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching furniture data:', error);
    throw error;
  }
};

export default getFurniture;