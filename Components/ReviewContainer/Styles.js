import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const SafeAreaView = styled.SafeAreaView`
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

export const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StarImage = styled.Image`
  width: 24px;
  height: 24px;
`;

export const RatingText = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
`;

export const StarContainer = styled.View`
  margin-right: 5px;
`;

export const RatingTextContainer = styled.View`
  margin-left: 5px;
`;

export const ReviewContainer = styled.View`
  background-color: #303030;
  height: ${height * 0.3}px;
  border-radius: 20px;
  padding: 24px;
`;

export const ReviewTitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: 30px;
  height: 30px;
`;

export const ProfileText = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  margin-left: 10px;
`;

export const ReviewRatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ReviewStarContainer = styled.View`
  flex-direction: row;
`;

export const ReviewStarImage = styled.Image`
  margin-horizontal: 1px;
  width: 10px;
  height: 10px;
`;

export const ReviewDateContainer = styled.View`
  margin-left: 10px;
`;

export const ReviewDateText = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
`;

export const ReviewDetailContainer = styled.View`
  margin-top: ${height * 0.02}px;
`;

export const ReviewCommentContainer = styled.View``;

export const CommentText = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
`;

export const ReviewImageContainer = styled.View`
  margin-top: ${height * 0.055}px;
  flex-direction: row;
  border-radious: 5px;
`;

export const ReviewImage = styled.Image`
  margin-right: 10px;
  width: 80px;
  height: 80px;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalImage = styled.Image`
  width: 80%;
  height: 50%;
  resize-mode: contain;
`;

export const ModalComment = styled.Text`
  color: white;
  margin-top: 20px;
  text-align: center;
`;

export const CloseButton = styled.TouchableOpacity`
  margin-top: 20px;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
`;

export const CloseButtonText = styled.Text`
  color: black;
`;