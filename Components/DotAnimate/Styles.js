import styled from 'styled-components/native';
import { Dimensions, Animated } from 'react-native';

const { width, height } = Dimensions.get('window');

export const LoadingBar = styled.View`
  align-self: center;
  align-items: center;
  justify-content: center;
  width: ${width * 0.8}px;
  height: ${height * 0.06}px;
  background-color: #474747;
  border-radius: 10px;
`;

export const InnerBar = styled.View`
  width: ${width * 0.78}px;
  height: ${height * 0.05}px;
  border-radius: 10px;
  border-color: #ffffff;
  border-width: 1px;
`;

export const DotContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Dot = styled(Animated.View)`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #ffffff;
  margin-right: 4px;
  opacity: 0.7;
`;