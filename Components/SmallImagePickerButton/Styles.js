import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const PhotoSelectBox = styled.View`
  width: ${width * 0.2}px;
  height: ${width * 0.18}px;
  border-radius: 5px;
  border-width: 1px;
  border-color: #d0d0d0;
  justify-content: center;
  align-items: center;
`;

export const SelectedImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const CameraImage = styled.Image`
  width: 30px;
  height: 30px;
`;