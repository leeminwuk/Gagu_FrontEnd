import React from 'react';
import { Image } from 'react-native';
import {
  HeaderContainer,
  BackButtonContainer,
  BackButton,
  LogoContainer,
  Logo,
} from './Styles';

const MypageHeader = ({ navigation }) => {
  const handlerBack = () => {
    navigation.goBack();
  };

  return (
    <HeaderContainer>
      <BackButtonContainer>
        <BackButton onPress={handlerBack} activeOpacity={0.8}>
          <Image
            source={require('../../assets/images/backButton.png')}
          />
        </BackButton>
      </BackButtonContainer>
      <LogoContainer>
        <Logo
          source={require('../../assets/images/miniLogo.png')}
        />
      </LogoContainer>
    </HeaderContainer>
  );
};

export default MypageHeader;