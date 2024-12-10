import React, { useState, useEffect } from 'react';
import { View, Text, Image, Alert, ScrollView, SafeAreaView } from 'react-native';
import BackButton from '../../Components/BackButton/BackButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import ReviewContainer from '../../Components/ReviewContainer/ReviewContainer';
import CommonButton from '../../Button/CommonButton/CommonButton'; 
import { checkReview } from '../../api/checkReview';
import {
  SafeContainer,
  Container,
  Title,
  TitleTextContainer,
  TitleText,
  RatingContainer,
  StarContainer,
  StarImage,
  RatingTextContainer,
  RatingText,
  ReviewScrollView,
  ReviewContainerStyled,
  ReviewButtonContainer,
} from './Styles';

const ReviewScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const workshopName = route.params?.workshopName || '가구공방';
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewData = await checkReview(workshopName, 0, 10);
        if (reviewData && reviewData.content) {
          setReviews(reviewData.content);
          setReviewCount(reviewData.totalElements);

          const totalStars = reviewData.content.reduce((sum, review) => sum + review.stars, 0);
          const avgRating = totalStars / reviewData.content.length;
          setAverageRating(avgRating.toFixed(1));
        }
      } catch (error) {
        console.error('리뷰를 불러오는 중 오류가 발생했습니다:', error);
        Alert.alert('오류', '리뷰를 불러오는 중 오류가 발생했습니다.');
      }
    };

    fetchReviews();
  }, [workshopName]);

  const handleWriteReview = () => {
    navigation.navigate('WriteReviewScreen', { workshopName });
  };

  const renderStars = () => {
    const starCount = Math.floor(averageRating);
    return (
      <StarContainer>
        {[...Array(starCount)].map((_, index) => (
          <StarImage
            key={index}
            source={require('../../assets/images/filedstar.png')}
          />
        ))}
      </StarContainer>
    );
  };

  return (
    <SafeContainer>
      <BackButton navigation={navigation} />
      <Container>
        <Title>
          <TitleTextContainer>
            <TitleText>{workshopName} 리뷰</TitleText>
          </TitleTextContainer>
          <RatingContainer>
            {renderStars()}
            <RatingTextContainer>
              <RatingText>{averageRating} ({reviewCount})</RatingText>
            </RatingTextContainer>
          </RatingContainer>
        </Title>
        <ReviewScrollView>
          <ReviewContainerStyled>
            {reviews.map((review, index) => {
              const dateOnly = review.date.split(' ')[0];
              return (
                <ReviewContainer
                  key={index}
                  writer={review.writer}
                  date={dateOnly}
                  description={review.description}
                  stars={review.stars}
                  img1={review.img1}
                  img2={review.img2}
                  img3={review.img3}
                />
              );
            })}
          </ReviewContainerStyled>
        </ReviewScrollView>
      </Container>
    </SafeContainer>
  );
};

export default ReviewScreen;