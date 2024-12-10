import { OnPressGoogleBtn, HandleLogin } from './types';
import { onPressGoogleBtn as googleSignup } from '../../api/googleSignup';
import { handleLogin as kakaoSignup } from '../../api/kakaoSignup';

export const handleGoogleLogin: OnPressGoogleBtn = async () => {
  try {
    const success = await googleSignup();
    return success;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const handleKakaoLogin: HandleLogin = async () => {
  try {
    const success = await kakaoSignup();
    return success;
  } catch (error) {
    console.error(error);
    return false;
  }
};