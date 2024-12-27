import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import MainHeader from '../../Components/MainHeader/MainHeader';
import { useNavigation } from '@react-navigation/native';
import CommonButton from '../../Button/CommonButton/CommonButton';
import logOut from '../../api/logOut';
import MypageButton from '../../Button/MypageButton/MypageButton';
import { getToken } from '../../utils/storage';
import { UserInfo } from '../../api/userInfo';
import {
  MyPageContainer,
  Container,
  ProfileContainer,
  ProfileImage,
  ProfileDetailContainer,
  ProfileText,
  UserEmailContainer,
  EmailText,
  ButtonContainer,
  LogoImage,
  BarButtonContainer,
  LogoStyle,
  LogoContainer,
} from './Styles';

const MyPageScreen = () => {
  const [profileUrl, setProfileUrl] = useState('');
  const [nickname, setNickname] = useState(''); 
  const [email, setEmail] = useState('');
  const [loginTypeLogo, setLoginTypeLogo] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = await getToken();
        const userInfo = await UserInfo(token);
        setProfileUrl(userInfo.profileUrl);
        setNickname(userInfo.nickname); 
        setEmail(userInfo.email);
        setLoginTypeLogo(userInfo.loginTypeLogo);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, []);

  const onPressEditInformation = () => {
    navigation.navigate('EditInformationScreen');
  };

  const handleLogoutPress = async () => {
    try {
      const token = await getToken();
      const result = await logOut(token);
      if (result.success) {
        console.log(result.message);
        navigation.navigate('LoginScreen');
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error('로그아웃 중 오류 발생:', error);
    }
  };
  const onPressPayment = () => {
    navigation.navigate('ResponsePaymentScreen');
  };
  return (
    <MyPageContainer>
      <MainHeader />
      <Container>
        <ProfileContainer>
          <ProfileImage
            source={
              profileUrl
                ? { uri: profileUrl }
                : require('../../assets/images/profile.png')
            }
          />
        </ProfileContainer>
        <ProfileDetailContainer>
          <ProfileText>{nickname} 님</ProfileText> 
          <UserEmailContainer>
            {loginTypeLogo && (
              <LogoImage source={{ uri: loginTypeLogo }} />
            )}
            <EmailText>{email}</EmailText>
          </UserEmailContainer>
        </ProfileDetailContainer>
        <BarButtonContainer>
          <MypageButton
            image={require('../../assets/images/profile.png')}
            text="개인정보 수정"
            onPress={onPressEditInformation}
          />
          <MypageButton
            onPress={onPressPayment}
            image={require('../../assets/images/miniLogo.png')}
            text="APP 설정"
            imagecontainerStyle={LogoContainer}
            imageStyle={LogoStyle}
          />
        </BarButtonContainer>
        <ButtonContainer>
          <CommonButton
            buttonText="로그아웃"
            buttonColor="#ffffff"
            textColor="#000000"
            onPress={handleLogoutPress}
          />
          <CommonButton buttonText="가구 탈퇴하기" textColor="#585858" />
        </ButtonContainer>
      </Container>
    </MyPageContainer>
  );
};

export default MyPageScreen;