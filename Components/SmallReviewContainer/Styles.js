import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

export const ReviewContents = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${height * 0.2}px;
`;

export const ReviewBox = styled.View`
  background-color: rgba(133, 133, 133, 0.12);
  border-radius: 8px;
  padding: 12px;
  margin-top: 12px;
  width: ${width * 0.35}px;
  height: ${height * 0.2}px;
`;

export const ReviewImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #5c5c5c;
  border-radius: 8px;
  width: ${width * 0.35 - 24}px;
  height: ${height * 0.1}px;
`;

export const ReviewTextContainer = styled.View`
  margin-top: 12px;
`;

export const ReviewText = styled.Text`
  color: #ffffff;
  font-size: 12px;
  font-weight: 400;
`;