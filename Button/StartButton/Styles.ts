import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const ButtonContainer = styled.View`
  align-items: center;
`;

export const StartButtonStyled = styled.TouchableOpacity`
  width: ${width * 0.887}px;
  height: 52px;
  background-color: #ffffff;
  border-radius: 10px;
  border-width: 1px;
  justify-content: center;
  align-items: center;
  margin-bottom: 6px;
  flex-direction: row;
`;

export const StartText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #000000;
  margin-left: 32px;
`;

export const StartButtonEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ArrowImage = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: 14px;
`;

export const RightArrow = styled.Image`
  width: 24px;
  height: 24px;
  resize-mode: contain;
`;

export const IdText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  margin-left: 32px;
`;

export const PersonImage = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: 14px;
`;

export const Person = styled.Image`
  width: 24px;
  height: 24px;
`;

export const ImmediatelyButton = styled.TouchableOpacity`
  width: ${width * 0.887}px;
  height: 52px;
  background-color: #8f8f8f;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 6px;
  flex-direction: row;
  opacity: 0.2;
  z-index: -1;
`;

export const ImmediatelyButtonEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;