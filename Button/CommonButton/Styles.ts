import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: #ffffff;
  height: ${width * 0.15}px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding-horizontal: 16px;
`;

export const ButtonText = styled.Text`
  text-align: center;
  color: #000000;
  width: ${width * 0.8}px;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.5px;
`;