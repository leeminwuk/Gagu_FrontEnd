import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  ButtonContainer,
  StartButtonStyled,
  StartText,
  StartButtonEnd,
  ArrowImage,
  RightArrow,
  ImmediatelyButton,
  ImmediatelyButtonEnd,
  IdText,
  PersonImage,
  Person,
} from './Styles';
import { StartButtonProps, Navigation } from './types';

const StartButton: React.FC<StartButtonProps> = () => {
  const navigation = useNavigation<Navigation>();

  const handleToSignup = () => {
    navigation.navigate('SignupScreen');
  };

  const handleToLogin = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <ButtonContainer>
      <StartButtonStyled onPress={handleToSignup} activeOpacity={0.7}>
        <StartButtonEnd>
          <StartText>시작하기</StartText>
        </StartButtonEnd>
        <ArrowImage>
          <RightArrow source={require('../../assets/images/rightArrow.png')} />
        </ArrowImage>
      </StartButtonStyled>
      <ImmediatelyButton onPress={handleToLogin} activeOpacity={0.6}>
        <ImmediatelyButtonEnd>
          <IdText>이미 계정이 있어요</IdText>
        </ImmediatelyButtonEnd>
        <PersonImage>
          <Person source={require('../../assets/images/person.png')} />
        </PersonImage>
      </ImmediatelyButton>
    </ButtonContainer>
  );
};

export default StartButton;