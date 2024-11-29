import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const GoogleButton = styled.TouchableOpacity`
  width: ${width * 0.887}px;
  height: 52px;
  border-radius: 8px;
  margin-bottom: 8px;
  font-size: 12px;
  color: #4a4a4a;
  background-color: #ffffff;
  shadow-color: #9b9b9b;
  shadow-offset: 0px 2px;
  shadow-opacity: 1;
  shadow-radius: 0px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const GoogleIcon = styled.Image`
  width: 24px;
  height: 24px;
  margin-left: 10px;
`;

export const GoogleText = styled.Text`
  color: #000000;
  text-align: center;
  margin-right: 34px;
`;

export const KakaoButton = styled.TouchableOpacity`
  width: ${width * 0.887}px;
  height: 52px;
  border-radius: 8px;
  margin-bottom: 8px;
  font-size: 12px;
  color: #4a4a4a;
  background-color: #fee500;
  shadow-color: #9b9b9b;
  shadow-offset: 0px 2px;
  shadow-opacity: 1;
  shadow-radius: 0px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const KakaoIcon = styled.Image`
  width: 24px;
  height: 24px;
  margin-left: 10px;
`;

export const KakaoText = styled.Text`
  color: #000000;
  text-align: center;
  margin-right: 34px;
`;

export const TextContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
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
  letter-spacing: -0.5px;
`;

export const StartButton = styled.TouchableOpacity`
  margin-top: 140px;
  margin-left: 12px;
`;

export const StartText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.5px;
  margin-left: 8px;
`;

export const StartArrow = styled.View`
  width: ${width * 0.7}px;
  height: 2px;
  background-color: #ffffff;
  margin-top: -20px;
`;

export const StartArrowContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const RightArrow = styled.Image`
  margin-left: -80px;
  margin-top: -20px;
`;

export const ArrowCircle = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #ffffff;
  margin-top: -20px;
  margin-left: -30px;
`;