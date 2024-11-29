import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: #191919;
`;

export const FixedContainer = styled.View`
  height: ${height * 0.8}px;
  justify-content: center;
`;

export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const LightImage = styled.Image`
  width: 300px;
  height: 200px;
  align-self: center;
`;

export const BigLight = styled.ImageBackground`
  width: 350px;
  height: 200px;
  align-self: center;
`;

export const TextContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const SuccessText = styled.Text`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  opacity: 0.8;
`;