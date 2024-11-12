import React, { useState, useEffect } from 'react';
import { View, Text, Image, Alert, ScrollView, SafeAreaView } from 'react-native';
import BackButton from '../../Components/BackButton/BackButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './Styles';
import ReviewContainer from '../../Components/ReviewContainer/ReviewContainer';
import CommonButton from '../../Button/CommonButton'; 
import { checkReview } from '../../api/checkReview';

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
      <View style={styles.starContainer}>
        {[...Array(starCount)].map((_, index) => (
          <Image
            key={index}
            source={require('../../assets/images/filedstar.png')}
            style={styles.starImage}
          />
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <BackButton navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.title}>
          <View style={styles.titleTextContainer}>
            <Text style={styles.titleText}>{workshopName} 리뷰</Text>
          </View>
          <View style={styles.ratingContainer}>
            {renderStars()}
            <View style={styles.ratingTextContainer}>
              <Text style={styles.ratingText}>{averageRating} ({reviewCount})</Text>
            </View>
          </View>
        </View>
        <ScrollView style={styles.reviewScrollView}>
          <View style={styles.reviewContainer}>
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
          </View>
        </ScrollView>
        <View style={styles.reviewButtonContainer}>
          <CommonButton
            buttonText="리뷰 작성하기"
            buttonColor="#ffffff"
            textColor="#000000"
            onPress={handleWriteReview}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ReviewScreen;