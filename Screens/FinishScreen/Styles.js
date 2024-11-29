import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: #191919;
  padding-horizontal: 22px;
`;

export const FixedContainer = styled.View`
  height: ${height * 0.8}px;
`;

export const MainText = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

export const RotateContainer = styled.TouchableOpacity`
  width: 100px;
  height: 30px;
  border-radius: 25px;
  align-self: center;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border-radius: 25px;
  border-color: white;
  border-width: 2px;
  flex-direction: row;
`;

export const RotateButton = styled.Image`
  width: 16px;
  height: 16px;
  align-self: center;
`;

export const RotateText = styled.Text`
  color: white;
  font-size: 10px;
  margin-left: 6px;
`;

export const TextWrapper = styled.View`
  margin-bottom: 10px;
`;

export const ARContainer = styled.View`
  margin-vertical: 22px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.View`
  margin-top: 20px;
`;