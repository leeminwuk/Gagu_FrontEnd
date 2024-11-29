import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const FixedContainer = styled.View`
  height: ${height * 0.6}px;
`;

export const ImageContainer = styled.View`
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 100px;
`;

export const SolidImage = styled.Image`
  width: ${width * 0.8}px;
  height: ${height * 0.4}px;
`;