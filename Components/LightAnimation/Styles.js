import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: #191919;
`;

export const FixedContainer = styled.View`
  height: ${height * 0.6}px;
`;

export const ImageContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const LightImage = styled.Image`
  width: 250px;
  height: 150px;
`;

export const AnimationImage = styled.View`
  align-items: center;
  justify-content: center;
`;