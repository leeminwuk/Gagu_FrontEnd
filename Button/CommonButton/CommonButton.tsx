import React from 'react';
import { StyleSheet } from 'react-native';
import {
  ButtonContainer,
  Button,
  ButtonText,
} from './Styles';
import { CommonButtonProps } from './types';

const CommonButton: React.FC<CommonButtonProps> = ({ buttonText, buttonColor, textColor, onPress, style, textStyle }) => {
  return (
    <ButtonContainer style={style}>
      <Button
        style={{ backgroundColor: buttonColor }}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <ButtonText style={[{ color: textColor }, StyleSheet.flatten(textStyle)]}>{buttonText}</ButtonText>
      </Button>
    </ButtonContainer>
  );
};

export default CommonButton;