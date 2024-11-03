import axios from 'axios';
import Config from 'react-native-config';

const API_URL = Config.API_URL;

const removeFurniture = async (id, token) => {
  try {
    const response = await axios.delete(`${API_URL}/estimate/remove-furniture?id=${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'accept': '*/*'
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default removeFurniture;