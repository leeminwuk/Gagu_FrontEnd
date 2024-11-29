import React from 'react';
import {
  ButtonContainer,
  Button,
  ButtonText,
} from './Styles';

const CommonButton = ({ buttonText, buttonColor, textColor, onPress }) => {
  return (
    <ButtonContainer>
      <Button
        style={{ backgroundColor: buttonColor }}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <ButtonText style={{ color: textColor }}>{buttonText}</ButtonText>
      </Button>
    </ButtonContainer>
  );
};

export default CommonButton;