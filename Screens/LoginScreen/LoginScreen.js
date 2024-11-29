import React from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import GoogleLoginButton from '../../Button/LoginButton/GoogleButton';
import KakaoLoginButton from '../../Button/LoginButton/KakaoButton';
import {
  Container,
  ButtonContainer,
  TextContainer,
  BackgroundImage,
  SignupText,
  SideText,
  SideTextBox,
  ShopButton,
  ShopText,
} from './Styles';

const LoginScreen = ({ navigation }) => {
  const handleShopSignup = () => {
    navigation.navigate('WorkshopLoginScreen');
  };
  const sideText =
    '돌아오신 것을 환영합니다 :)\n기존에 가입한 계정으로 로그인 해주세요!';
  return (
    <Container>
      <BackgroundImage
        source={require('../../assets/images/background.png')}
      />
      <TextContainer>
          <SignupText>로그인</SignupText>
        <SideTextBox>
          <SideText>{sideText}</SideText>
        </SideTextBox>
      </TextContainer>

      <ButtonContainer>
        {/* <GoogleLoginButton /> */}
        <KakaoLoginButton />
        <ShopButton>
          <TouchableOpacity activeOpacity={0.7} onPress={handleShopSignup}>
            <ShopText>공방 관계자로 로그인 할래요</ShopText>
          </TouchableOpacity>
        </ShopButton>
      </ButtonContainer>
    </Container>
  );
};

export default LoginScreen;