import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #191919;
`;

export const Container = styled.View`
  flex: 1;
  padding: 16px;
`;

export const Title = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const TitleTextContainer = styled.View`
  flex: 1;
`;

export const TitleText = styled.Text`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`;

export const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StarContainer = styled.View`
  flex-direction: row;
  margin-right: 8px;
`;

export const StarImage = styled.Image`
  width: 20px;
  height: 20px;
`;

export const RatingTextContainer = styled.View`
  justify-content: center;
`;

export const RatingText = styled.Text`
  color: #ffffff;
  font-size: 16px;
`;

export const ReviewScrollView = styled.ScrollView`
  flex: 1;
`;

export const ReviewContainerStyled = styled.View`
  flex: 1;
  gap: ${height * 0.03}px;
`;

export const ReviewButtonContainer = styled.View`
  margin-top: 16px;
`;