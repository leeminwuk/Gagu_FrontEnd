import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: #191919;
  padding-horizontal: 22px;
`;

export const MainText = styled.Text`
  color: white;
  font-size: 26px;
  font-weight: bold;
`;

export const SideTextContainer = styled.View`
  margin-top: 10px;
`;

export const SideText = styled.Text`
  color: #969696;
  font-size: 12px;
`;

export const LocationContainer = styled.View`
  margin-vertical: 22px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WorkShopContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const WorkshopWrapper = styled.View`
  margin-bottom: ${height * 0.0235}px;
`;