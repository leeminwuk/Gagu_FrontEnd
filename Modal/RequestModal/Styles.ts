import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const BlurContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const ModalContainer = styled.View`
  align-items: center;
  background-color: #303030;
  width: ${width}px;
  height: ${height * 0.5}px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: absolute;
  bottom: 0;
`;
export const FurnitureTouch = styled.TouchableOpacity`
  
`;
export const FurnitureImage = styled.Image`
  width: ${width / 3}px;
  height: ${width / 3}px;
  resize-mode: contain;
  border-width: 3px;
  border-color: #fff;

`;