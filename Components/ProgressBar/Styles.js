import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const FixedBar = styled.View`
  align-self: center;
  align-items: center;
  justify-content: center;
  width: ${width * 0.6}px;
  height: ${height * 0.03}px;
  background-color: #385682;
  border-radius: 10px;
`;

export const LoadingBar = styled.View`
  height: ${height * 0.03}px;
  background-color: #cadfff;
  border-radius: 10px;
`;