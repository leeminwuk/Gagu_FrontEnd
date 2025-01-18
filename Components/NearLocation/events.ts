import { getToken } from '../../utils/storage';
import { UserInfo } from '../../api/userInfo';
import { Dispatch, SetStateAction } from 'react';

export const fetchAddress = async (setNearLocationText: Dispatch<SetStateAction<string>>) => {
  try {
    const token = await getToken();
    const userInfo = await UserInfo(token);
    if (userInfo && userInfo.address) {
      const address = userInfo.address;
      const match = address.match(/.*[시군구]/);
      if (match) {
        setNearLocationText(match[0]);
      } else {
        setNearLocationText('주소를 찾을 수 없습니다.');
      }
    } else {
      setNearLocationText('주소를 찾을 수 없습니다.');
    }
  } catch (error) {
    console.error('Error fetching user address:', error);
    setNearLocationText('주소를 가져오는 중 오류가 발생했습니다.');
  }
};