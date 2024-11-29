import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: #191919;
  padding-horizontal: 22px;
`;

export const FixedContainer = styled.View`
  height: ${height * 0.8}px;
`;

export const MainText = styled.Text`
  color: white;
  font-size: 26px;
  font-weight: bold;
`;