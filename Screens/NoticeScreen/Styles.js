import styled from 'styled-components/native';
import { Dimensions, Animated } from 'react-native';

const { width, height } = Dimensions.get('window');

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #191919;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #191919;
  padding-horizontal: 22px;
`;

export const Title = styled.View`
  margin-vertical: ${height * 0.05}px;
  justify-content: center;
`;

export const TitleText = styled.Text`
  color: #ffffff;
  font-size: 26px;
  font-weight: 600;
`;

export const NoticeBox = styled.View`
  background-color: #191919;
`;

export const NoticeCategory = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${width * 0.4}px;
`;

export const NoticeCategoryText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
`;

export const ActiveTabText = styled.Text`
  color: #ffffff;
`;

export const InactiveTabText = styled.Text`
  color: #666666;
`;

export const AnimatedLine = styled(Animated.View)`
  height: 2px;
  margin-top: ${height * 0.005}px;
  width: ${width * 0.18}px;
  background-color: #ffffff;
`;

export const NoticeContentContainer = styled.View`
  gap: ${height * 0.02}px;
  margin-top: ${height * 0.05}px;
`;