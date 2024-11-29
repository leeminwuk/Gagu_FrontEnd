import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const MainContainer = styled.View`
  flex: 1;
`;

export const BackgroundImage = styled.ImageBackground`
  width: ${width}px;
  height: ${height}px;
`;

export const TextContainer = styled.View`
  margin-top: 100px;
  margin-left: 22px;
`;

export const OverlayText = styled.Text`
  color: #ffffff;
  font-size: 26px;
  font-weight: 600;
`;

export const StartButton = styled.View`
  margin-top: 200px;
  margin-left: 22px;
`;

export const StartText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.5px;
  width: ${width * 0.3}px;
`;

export const StartArrowContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const StartArrow = styled.View`
  width: ${width * 0.7}px;
  height: 2px;
  background-color: #ffffff;
`;

export const RightArrow = styled.View`
  margin-left: -20px;
  margin-top: 10px;
`;

export const RightArrowImage = styled.Image`
  width: 40px;
  height: 40px;
  resize-mode: contain;
`;

export const ArrowCircle = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #ffffff;
  justify-content: flex-start;
  align-items: center;
`;