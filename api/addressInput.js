import axios from 'axios';
import Config from 'react-native-config';

const API_URL = Config.API_URL;

export const postAddress = async (token, address) => {
  try {
    const response = await axios.post(
      `${API_URL}/profile/address`,
      { address },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          accept: '*/*',
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};