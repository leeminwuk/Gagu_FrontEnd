import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const WorkshopImageContainer = styled.View`
  margin-top: 10px;
  width: ${width * 0.89}px;
  height: ${height * 0.25}px;
  border-color: #d0d0d0;
  border-width: 1px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const CameraImage = styled.Image`
  width: 40px;
  height: 40px;
`;

export const ProfileImage = styled.Image`
  width: ${width * 0.88}px;
  height: ${height * 0.245}px;
  border-radius: 6px;
`;