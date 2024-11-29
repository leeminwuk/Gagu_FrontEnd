import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: #191919;
`;

export const Title = styled.View`
  margin-horizontal: 22px;
  margin-bottom: 20px;
  justify-content: center;
`;

export const UserProgress = styled.View``;

export const UserProgressText = styled.Text`
  font-size: 26px;
  font-weight: 600;
  color: #ffffff;
  line-height: 30px;
`;

export const ChoiceWorkshopContainer = styled.View``;

export const ChoiceTitle = styled.View`
  margin-horizontal: 22px;
  margin-vertical: 14px;
  justify-content: center;
`;

export const ChoiceText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  line-height: 30px;
`;

export const SelectContainer = styled.View`
  margin-horizontal: 22px;
`;

export const NoSelectTextContainer = styled.View`
  height: ${height * 0.6}px;
  justify-content: center;
  align-items: center;
`;

export const NoSelectText = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: #ffffff;
  line-height: 20px;
  text-align: center;
`;