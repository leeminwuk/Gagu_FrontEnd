import axios, { AxiosResponse } from 'axios';
import Config from 'react-native-config';
import { PostAddressResponse } from './types'; 

const API_URL = Config.API_URL;

export const postAddress = async (token: string, address: string): Promise<PostAddressResponse | undefined> => {
  try {
    const response: AxiosResponse<PostAddressResponse> = await axios.post(
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
    return undefined;
  }
};