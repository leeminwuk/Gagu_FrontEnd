import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: #191919;
  padding-horizontal: 22px;
`;

export const MainText = styled.Text`
  color: white;
  font-size: 26px;
  font-weight: bold;
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

export const TextInputBox = styled.View`
  margin-top: ${height * 0.3}px;
`;

export const TextInputContainer = styled.View`
  justify-content: space-between;
  align-self: center;
  flex-direction: row;
  align-items: center;
  width: ${width * 0.86}px;
  height: ${height * 0.07}px;
  background-color: #303030;
  border-radius: 8px;
  padding-horizontal: 8px;
`;

export const TextInputStyled = styled.TextInput`
  color: white;
  font-size: 16px;
`;

export const MiniImageContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #10a37f;
  width: 36px;
  height: 36px;
  border-radius: 8px;
`;

export const MiniImage = styled.Image`
  width: 18px;
  height: 18px;
`;

export const HintText = styled.Text`
  color: #969696;
  font-size: 16px;
  align-self: center;
  margin-top: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #969696;
`;