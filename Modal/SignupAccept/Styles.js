import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: #191919;
`;

export const TextContainer = styled.View`
  flex: 1;
  padding-horizontal: 22px;
  margin-top: 180px;
`;

export const MainText = styled.Text`
  font-weight: 900;
  font-size: 30px;
  color: #ffffff;
`;

export const SideTextBox = styled.View`
  margin-top: 40px;
`;

export const SideText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  margin-top: 14px;
  line-height: 24px;
`;

export const StartButton = styled.View`
  margin-top: ${height * 0.3}px;
`;

export const StartText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.5px;
  margin-left: 8px;
`;

export const StartArrow = styled.View`
  width: ${width * 0.8}px;
  height: 2px;
  background-color: #ffffff;
  margin-bottom: 20px;
`;

export const StartArrowContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const RightArrow = styled.View`
  margin-left: -60px;
  margin-top: -20px;
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
  margin-top: -20px;
  margin-left: -30px;
`;