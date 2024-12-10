import axios, {AxiosResponse} from 'axios';
import Config from 'react-native-config';
import {
  SendVerificationCodeResponse,
  VerifyVerificationCodeResponse,
} from './types'; 

const API_URL = Config.API_URL;
const SEND_API_URL = `${API_URL}/auth/send-one`;
const VERIFY_API_URL = `${API_URL}/auth/authorize`;

// 인증번호 전송 함수
export const sendVerificationCode = async (
  phoneNumber: string,
): Promise<SendVerificationCodeResponse> => {
  try {
    const response: AxiosResponse<SendVerificationCodeResponse> =
      await axios.post(SEND_API_URL, {phoneNumber});
    return response.data;
  } catch (error) {
    console.error('Error sending verification code:', error);
    throw error;
  }
};

// 인증번호 검증 함수
export const verifyVerificationCode = async (
  phoneNumber: string,
  authorizationNumber: string,
): Promise<VerifyVerificationCodeResponse> => {
  try {
    const response: AxiosResponse<VerifyVerificationCodeResponse> =
      await axios.post(VERIFY_API_URL, {phoneNumber, authorizationNumber});
    return response.data;
  } catch (error) {
    console.error('Error verifying code:', error);
    throw error;
  }
};
