import { useState, useEffect } from 'react';
import { getToken } from '../utils/storage';
import { UserInfo } from '../api/userInfo';

const useUserInfo = () => {
  const [profileUrl, setProfileUrl] = useState('');
  const [nickname, setNickname] = useState(''); 
  const [email, setEmail] = useState('');
  const [loginTypeLogo, setLoginTypeLogo] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getToken();
        const userInfo = await UserInfo(token);
        setProfileUrl(`${userInfo.profileUrl}?timestamp=${new Date().getTime()}`);
        setNickname(userInfo.nickname); 
        setEmail(userInfo.email);
        setLoginTypeLogo(userInfo.loginTypeLogo);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };
    fetchData();
  }, []);

  return { profileUrl, nickname, email, loginTypeLogo }; 
};

export default useUserInfo;