import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import styles from './Styles';
import CommonButton from '../../Button/CommonButton';
import SmallImagePickerButton from '../../Components/SmallImagePickerButton/SmallImagePickerButton';
import { writeReview } from '../../api/writeReview';
import { uploadFile } from '../../api/fileUpload';
import { getToken } from '../../utils/storage';

const WriteReviewScreen = ({ navigation }) => {
  const route = useRoute();
  const shopname = route.params?.shopname || '가구공방'; // shopname 받기

  const [rating, setRating] = useState(0);
  const [images, setImages] = useState([null, null, null]);
  const [reviewText, setReviewText] = useState('');

  const handleStarPress = (index) => {
    setRating(index + 1);
  };

  const setImage = (index, image) => {
    const newImages = [...images];
    newImages[index] = image;
    setImages(newImages);
    console.log('Updated Images:', newImages);
  };

  const handleSubmitReview = async () => {
    const token = await getToken();
    if (!token) {
      Alert.alert('오류', '로그인이 필요합니다.');
      return;
    }

    try {
      // 이미지 업로드
      const uploadedImageUrls = await Promise.all(
        images.map(async (image, index) => {
          if (image) {
            const uploadedImage = await uploadFile(image);
            console.log(`Uploaded Image ${index + 1}:`, uploadedImage); // 업로드된 이미지 로그
            return uploadedImage; // response.data 반환
          }
          return null;
        })
      );

      // 업로드된 이미지 URL 로그
      console.log('Uploaded Image URLs:', uploadedImageUrls);

      // 리뷰 데이터 전송
      const reviewData = {
        workshopName: shopname, // shopname 사용
        description: reviewText,
        reviewPhoto1: uploadedImageUrls[0] || null,
        reviewPhoto2: uploadedImageUrls[1] || null,
        reviewPhoto3: uploadedImageUrls[2] || null,
        stars: rating.toString(),
      };

      console.log('Review Data:', reviewData); // 리뷰 데이터 로그

      const response = await writeReview(token, reviewData);
      if (response) {
        Alert.alert('성공', '리뷰가 성공적으로 작성되었습니다.');
        navigation.navigate('BottomTabNavigator'); // 리뷰 작성 후 BottomTabNavigator로 이동
      } else {
        Alert.alert('오류', '리뷰 작성에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error:', error.message);
      Alert.alert('오류', '리뷰 작성 중 오류가 발생했습니다.');
    }
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{`"${shopname}" 후기를\n작성해주세요`}</Text>
        </View>
        <View style={styles.starRatingContainer}>
          {[...Array(5)].map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleStarPress(index)}
              activeOpacity={0.8}>
              <Image
                source={
                  index < rating
                    ? require('../../assets/images/filedstar.png')
                    : require('../../assets/images/star.png')
                }
                style={styles.starImage}
              />
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.ratingText}>{rating}점</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="욕설, 부적합한 내용은 삭제 될 수 있습니다."
            placeholderTextColor="#d0d0d0"
            multiline={true}
            numberOfLines={10}
            value={reviewText}
            onChangeText={setReviewText}
          />
        </View>
        <View style={styles.photoSelectContainer}>
          <View style={styles.photoTitle}>
            <Text style={styles.photoTitleText}>사진</Text>
            <Text style={styles.photoSubTitleText}>
              사진은 최대 3개까지만 가능합니다
            </Text>
          </View>
          <View style={styles.photoSelect}>
            {images.map((image, index) => (
              <SmallImagePickerButton
                key={index}
                setProfileUrl={(img) => setImage(index, img)}
                profileUrl={image}
              />
            ))}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <CommonButton
            buttonText="후기 작성 완료"
            buttonColor="#ffffff"
            textColor="#000000"
            onPress={handleSubmitReview}
          />
          <CommonButton
            buttonText="돌아가기"
            buttonColor="#666666"
            textColor="#ffffff"
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WriteReviewScreen;