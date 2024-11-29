import React from 'react';
import { View, Image, Text } from 'react-native';
import MyGoogleLoginButton from '../../Button/SignupButton/GoogleButton';
import MyKakaoLoginButton from '../../Button/SignupButton/KakaoButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
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

const SignupScreen = ({ navigation }) => {

  const handleShopSignup = () => {
    navigation.navigate('NumberAuthentication');
  }

  return (
    <Container>
      <BackgroundImage
        source={require('../../assets/images/background.png')}
      />
      <TextContainer>
          <SignupText>회원 가입하기</SignupText>
        <SideTextBox>
          <SideText>원하는 가구를 제작하고, 제공하려면{"\n"}회원가입이 필요해요!</SideText>
        </SideTextBox>
      </TextContainer>

      <ButtonContainer>
        {/* <MyGoogleLoginButton /> */}
        <MyKakaoLoginButton />
        <ShopButton>
          <TouchableOpacity activeOpacity={0.7} onPress={handleShopSignup}>
            <ShopText>공방 관계자로 가입 할래요</ShopText>
          </TouchableOpacity>
        </ShopButton>
      </ButtonContainer>
    </Container>
  );
};

export default SignupScreen;