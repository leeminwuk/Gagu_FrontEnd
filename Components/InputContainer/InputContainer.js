import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';
import {
  Container,
  TitleContainer,
  TitleText,
  InputContainer,
  Input,
  EditingInput,
  InvalidInput,
} from './Styles';

const InputContainerComponent = ({ title, value, setValue, isEditing, isValid = true }) => {
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!isValid) {
      Animated.sequence([
        Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
        Animated.timing(shakeAnimation, { toValue: -10, duration: 50, useNativeDriver: true }),
        Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
        Animated.timing(shakeAnimation, { toValue: 0, duration: 50, useNativeDriver: true }),
      ]).start();
    }
  }, [isValid]);

  const handleChange = text => {
    setValue(text);
  };

  return (
    <Container>
      <TitleContainer>
        <TitleText>{title}</TitleText>
      </TitleContainer>
      <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
        <InputContainer>
          <Input
            style={[isEditing ? EditingInput : null, !isValid ? InvalidInput : null]}
            value={value}
            onChangeText={handleChange}
            editable={isEditing}
          />
        </InputContainer>
      </Animated.View>
    </Container>
  );
};

export default InputContainerComponent;