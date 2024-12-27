import axios, { AxiosResponse } from 'axios';
import { getToken } from '../utils/storage';
import Config from 'react-native-config';
import { GetWorkshopEstimatesResponse } from './types'; 

const API_URL = Config.API_URL;

export const getWorkshopEstimates = async (nickname: string, page: number = 0): Promise<GetWorkshopEstimatesResponse> => {
  try {
    const token = await getToken();
    if (!token) {
      throw new Error('Token is missing');
    }

    // nickname을 인코딩
    const encodedNickname = encodeURIComponent(nickname);
    const requestUrl = `${API_URL}/estimate/workshop/${encodedNickname}`;
    console.log(`Request URL: ${requestUrl}?page=${page}`);

    const response: AxiosResponse<GetWorkshopEstimatesResponse> = await axios.get(requestUrl, {
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