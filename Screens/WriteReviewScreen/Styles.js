import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const SafeContainer = styled.SafeAreaView`
  background-color: #191919;
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  padding-horizontal: 22px;
  background-color: #191919;
`;

export const Title = styled.View`
  margin-vertical: ${height * 0.05}px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const TitleText = styled.Text`
  color: #ffffff;
  font-size: 26px;
  font-weight: 600;
`;

export const StarRatingContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-vertical: ${height * 0.02}px;
`;

export const StarImage = styled.Image`
  width: 30px;
  height: 30px;
  margin-horizontal: 5px;
`;

export const RatingText = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-bottom: ${height * 0.02}px;
`;

export const InputContainer = styled.View`
  margin-vertical: ${height * 0.02}px;
`;

export const Input = styled.TextInput`
  border-width: 1px;
  border-color: #d0d0d0;
  color: #ffffff;
  padding: 14px;
  border-radius: 5px;
  padding-top: 10px;
`;

export const TextArea = styled(Input)`
  height: ${height * 0.2}px;
  text-align-vertical: top;
`;

export const PhotoSelectContainer = styled.View`
  margin-vertical: ${height * 0.02}px;
`;

export const PhotoTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PhotoTitleText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: 800;
`;

export const PhotoSubTitleText = styled.Text`
  color: #707070;
  font-size: 12px;
  margin-left: 10px;
  font-weight: 400;
`;

export const PhotoSelect = styled.View`
  flex-direction: row;
  gap: ${width * 0.03}px;
  margin-top: ${height * 0.03}px;
`;

export const ButtonContainer = styled.View`
  margin-vertical: ${height * 0.05}px;
  gap: ${height * 0.02}px;
`;