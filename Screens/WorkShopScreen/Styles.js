import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  background-color: #191919;
  flex: 1;
`;

export const CloseButtonContainer = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1;
`;

export const CloseButton = styled.Image`
  width: 14px;
  height: 20px;
`;

export const ImageContainer = styled.View`
  width: ${width}px;
  height: ${height * 0.3}px;
  align-items: center;
`;

export const ImageStyled = styled.Image`
  width: ${width}px;
  height: ${height * 0.3}px;
`;

export const ContentsContainer = styled.View`
  width: ${width}px;
  padding-horizontal: 22px;
`;

export const OpinionContainer = styled.View``;

export const OpinionTitleContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
`;

export const OpImageContainer = styled.View`
  width: 24px;
  height: 24px;
`;

export const OpinionImage = styled.Image`
  width: 24px;
  height: 24px;
`;

export const OpniTitleContainer = styled.View`
  margin-left: 6px;
`;

export const OpinionTitle = styled.Text`
  color: #ffffff;
  font-size: 14px;
  height: 24px;
`;

export const OpinionContentsContainer = styled.View`
  background-color: rgba(133, 133, 133, 0.12);
  border-radius: 8px;
  padding: 12px;
`;

export const OpinionContents = styled.Text`
  color: #ffffff;
  font-size: 12px;
  font-weight: 400;
`;

export const ReviewContainer = styled.View`
  margin-top: 24px;
`;

export const ReviewTitleContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
`;

export const ReviewIconContainer = styled.View`
  width: 24px;
  height: 24px;
`;

export const ReviewIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const ReviewTextContainer = styled.View`
  margin-left: 6px;
`;

export const ReviewTitleText = styled.Text`
  color: #ffffff;
  font-size: 14px;
  height: 24px;
`;

export const ReviewRowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${width * 0.04}px;
  flex-wrap: wrap;
`;

export const NoReviews = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${height * 0.1}px;
  flex: 1;
`;

export const ReviewImage = styled.Image`
  width: ${width * 0.35 - 24}px;
  height: ${height * 0.1}px;
  border-radius: 8px;
`;

export const MoreContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 10px;
`;

export const MoreIconContainer = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MoreIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const MoreTextContainer = styled.View`
  margin-top: 6px;
`;

export const MoreText = styled.Text`
  color: #ffffff;
  font-size: 12px;
`;

export const ButtonContainer = styled.View`
  margin-top: 20px;
`;

export const NoReviewText = styled.Text`
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  font-weight: 800;
`;