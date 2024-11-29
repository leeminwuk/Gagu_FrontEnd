import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const TitleContainer = styled.View`
  margin-bottom: ${height * 0.05}px;
`;

export const MainTextBox = styled.View``;

export const TitleTextStyled = styled.Text`
  color: #fff;
  font-size: 26px;
  font-weight: 600;
`;

export const SideTextBox = styled.View`
  margin-top: 14px;
`;

export const SideTextStyled = styled.Text`
  color: #969696;
  font-size: 14px;
  font-weight: 400;
`;