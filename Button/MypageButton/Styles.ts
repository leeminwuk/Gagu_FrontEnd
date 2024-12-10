import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-horizontal: 20px;
  width: ${width * 0.887}px;
  height: ${height * 0.065}px;
  border-radius: 16px;
  border-color: #ffffff;
  border-width: 1px;
`;

export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: 40px;
`;

export const Image = styled.Image`
  width: 20px;
  height: 20px;
  resize-mode: contain;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #ffffff;
  font-weight: 800;
`;