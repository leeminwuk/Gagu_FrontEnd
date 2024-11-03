import axios from 'axios';
import { getToken } from '../utils/storage'; 
import Config from 'react-native-config';

const API_URL = Config.API_URL;

export const saveFurniture = async (furnitureData) => {
  try {
    const token = await getToken(); 
    if (!token) {
      throw new Error('토큰을 불러오지 못했습니다.');
    }

    const response = await axios.post(`${API_URL}/estimate/save-furniture`, furnitureData, {
      headers: {
        Authorization: `Bearer ${token}`,
        accept: '*/*',
      },
    });
    console.log('Response data:', response.data); 
    return response.data;
  } catch (error) {
    console.error('Error saving furniture:', error.response ? error.response.data : error.message); 
    throw error;
  }
};