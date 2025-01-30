import axios, { AxiosResponse } from 'axios';
import Config from 'react-native-config';
import { SavePhoneNumberResponse } from './types'; 

const API_URL = Config.API_URL;

export const saveUserPhoneNumber = async (token: string, phoneNumber: string): Promise<SavePhoneNumberResponse | undefined> => {
  try {
    const response: AxiosResponse<SavePhoneNumberResponse> = await axios.post(
      `${API_URL}/profile/save-phone`,
      { phoneNumber },
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