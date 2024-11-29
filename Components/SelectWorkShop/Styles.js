import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  width: ${width * 0.887}px;
  height: ${height * 0.2}px;
  border-radius: 10px;
`;

export const ImageStyled = styled.ImageBackground`
  flex: 1;
  resize-mode: cover;
  justify-content: center;
`;

export const Overlay = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const WorkshopName = styled.Text`
  font-size: 30px;
  font-weight: 900;
  color: #ffffff;
`;

export const WorkshopLocation = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  align-self: center;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #ffffff;
  padding: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: #000000;
`;

export const Icon = styled.Image`
  resize-mode: contain;
  width: 20px;
  height: 20px;
`;