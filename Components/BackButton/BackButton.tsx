import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Container,
  BackButtonContainer,
  BackButtonImage,
  TitleContainer,
  TitleText,
  HamburgerBarContainer,
  HamburgerBarImage,
} from './Styles';
import { BackButtonProps } from './types';

const BackButton: React.FC<BackButtonProps> = ({ navigation, titleText, image, onHamburgerPress, onPress, steps = 1 }) => {
  const handlerBack = async () => {
    if (onPress) {
      onPress();
    }
    navigation.pop(steps);
  };

  return (
    <Container>
      <BackButtonContainer>
        <TouchableOpacity onPress={handlerBack} activeOpacity={0.8}>
          <BackButtonImage
            source={require('../../assets/images/backButton.png')}
          />
        </TouchableOpacity>
      </BackButtonContainer>
      <TitleContainer>
        <TitleText>{titleText}</TitleText>
      </TitleContainer>
      <HamburgerBarContainer onPress={onHamburgerPress} activeOpacity={0.8}>
        <HamburgerBarImage source={image} />
      </HamburgerBarContainer>
    </Container>
  );
};

export default BackButton;