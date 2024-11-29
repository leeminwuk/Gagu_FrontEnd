import { View, Text, Image } from 'react-native';
import React from 'react';
import StartButton from '../../Button/StartButton/StartButton';
import {
  Container,
  BackgroundImage,
  LogoBox,
  Logo,
  LogoImage,
  SideTextContainer,
  SideText,
} from './Styles';

const StartScreen = () => {
  return (
    <Container>
      <BackgroundImage
        source={require('../../assets/images/background.png')}
      />
      <LogoBox>
        <Logo>
          <LogoImage
            source={require('../../assets/images/logo.png')}
          />
        </Logo>
        <SideTextContainer>
          <SideText>원하는 가구를 내 손안에</SideText>
        </SideTextContainer>
      </LogoBox>
      <StartButton />
    </Container>
  );
};

export default StartScreen;