import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  background-color: #191919;
  padding-horizontal: 22px;
  flex: 1;
`;

export const FixedContainer = styled.View`
  flex: 1;
`;

export const TextContainer = styled.View`
  margin-bottom: 20px;
`;

export const MainText = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

export const MiniTextContainer = styled.View`
  margin-top: 10px;
`;

export const MiniText = styled.Text`
  color: #969696;
  font-size: 14px;
  font-weight: 600;
`;

export const DescriptionText = styled.Text`
  color: white;
  font-size: 16px;
`;

export const PriceText = styled.Text`
  color: white;
  font-size: 16px;
`;

export const ImageBox = styled.View`
  align-items: center;
  background-color: #2d2d2d;
  border-radius: 20px;
  padding: 20px;
  margin-vertical: 20px;
`;

export const ImageContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ChairImage = styled.Image`
  width: ${width * 0.8}px;
  height: ${height * 0.4}px;
  border-radius: 10px;
`;

export const SolidImageContainer = styled.View`
  height: ${height * 0.6}px; 
`;