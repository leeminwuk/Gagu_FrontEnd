import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const StorageImageContainer = styled.TouchableOpacity`
  width: ${width * 0.42}px;
  height: ${height * 0.27}px;
  background-color: white;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled.Image`
  width: 100%;
  height: 70%;
  resize-mode: contain;
`;

export const MiniTextContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const FurnitureText = styled.Text`
  color: #000000;
  font-size: 16px;
  font-weight: 700;
`;

export const DateTextContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const DateText = styled.Text`
  color: #575757;
  font-size: 10px;
  font-weight: 500;
`;