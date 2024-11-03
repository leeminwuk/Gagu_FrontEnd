import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Title from './Title/Title';
import styles from './Styles';
import { Dimensions } from 'react-native';
import CommonButton from '../../Button/CommonButton';
import CommonModal from '../../Modal/CommonModal';
import { createChatRoom } from '../../api/createChat';
import { getToken } from '../../utils/storage';
import detailWorkshop from '../../api/detailWorkshop'; 
import { checkReview } from '../../api/checkReview';
import { UserInfo } from '../../api/userInfo';
import SmallReviewContainer from '../../Components/SmallReviewContainer/SmallReviewContainer';

const WorkShopScreen = ({ navigation, route }) => {
  const workshopId = route?.params?.workshopId; 
  const item = route?.params?.item; 
  const [modalVisible, setModalVisible] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [token, setToken] = useState('');
  const [workshopDetails, setWorkshopDetails] = useState(null);
  const [nickname, setNickname] = useState(''); 

  useEffect(() => {
    const fetchToken = async () => {
      const fetchedToken = await getToken();
      setToken(fetchedToken);
    };

    const fetchUserInfo = async () => {
      try {
        const token = await getToken();
        if (!token) {
          console.error('Token is missing');
          return;
        }
        const userInfo = await UserInfo(token);
        if (userInfo) {
          setNickname(userInfo.name); 
        } else {
          console.error('User info is missing');
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    const fetchWorkshopDetails = async () => {
      try {
        const data = await detailWorkshop(workshopId); 
        setWorkshopDetails(data);
        fetchReviews(data.workshopName); 
      } catch (error) {
        Alert.alert('오류', '공방 정보를 불러오는 중 오류가 발생했습니다.');
      }
    };

    const fetchReviews = async (workshopName) => {
      try {
        const reviewData = await checkReview(workshopName, 0, 2);
        if (reviewData && reviewData.content) {
          setReviews(reviewData.content);
        }
      } catch (error) {
        console.error('리뷰를 불러오는 중 오류가 발생했습니다:', error);
      }
    };

    if (workshopId) {
      fetchToken();
      fetchUserInfo();
      fetchWorkshopDetails();
    } else {
      Alert.alert('오류', '공방 ID가 없습니다.');
    }
  }, [workshopId]);

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleStorageButton = () => {
    console.log('handleRequestButton is called');
    setModalVisible(true);
  };

  const handleMorePress = () => {
    navigation.navigate('ReviewScreen', { workshopName: workshopDetails.workshopName });
  };

  const handleFirstButtonPress = async () => {
    setModalVisible(false);
    if (!token) {
      console.error('토큰이 없습니다.');
      Alert.alert('오류', '토큰이 없습니다.');
      return;
    }
    try {
      const chatRoomData = await createChatRoom(workshopDetails.workshopName, token);
      if (chatRoomData) {
        navigation.navigate('ChatScreen', { shopname: workshopDetails.workshopName, item, isWorkshop: false, nickname});
      }
    } catch (error) {
      console.error('채팅방 생성 중 오류 발생:', error);
      Alert.alert('오류', '채팅방 생성 중 오류가 발생했습니다.');
    }
  };

  const handleSecondButtonPress = () => {
    setModalVisible(false);
    navigation.navigate('BottomTabNavigator');
  };

  if (!workshopDetails) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#191919' }}>
        <Text style={{ color: '#fff' }}>로딩 중...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#191919' }}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.closeButtonContainer}
          onPress={handleBackButton}
          activeOpacity={0.8}>
          <Image
            source={require('../../assets/images/backButton.png')}
            style={styles.closeButton}
          />
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/workshop.png')}
            style={styles.image}
          />
        </View>
        <Title
          nameText={workshopDetails.workshopName}
          locationText={workshopDetails.address}
          costText={'10,000원'}
        />
        <ScrollView
          contentContainerStyle={{
            minHeight: Dimensions.get('window').height * 0.46,
          }}>
          <View style={styles.contentsContainer}>
            <View style={styles.opinionContainer}>
              <View style={styles.opiniontitleContainer}>
                <View style={styles.opImageContainer}>
                  <Image
                    source={require('../../assets/images/opinionicon.png')}
                    style={styles.opinionImage}
                  />
                </View>
                <View style={styles.opnititleContainer}>
                  <Text style={styles.opinionTitle}>공방 의견</Text>
                </View>
              </View>
              <View style={styles.opinioncontentsContainer}>
                <Text style={styles.opinionContents}>
                  {workshopDetails.description}
                </Text>
              </View>
              <View style={styles.reviewContainer}>
                <View style={styles.reviewTitleContainer}>
                  <View style={styles.reviewiconContainer}>
                    <Image
                      source={require('../../assets/images/reviewicon.png')}
                      style={styles.reviewIcon}
                    />
                  </View>
                  <View style={styles.reviewTextContainer}>
                    <Text style={styles.reviewTitleText}>공방 리뷰</Text>
                  </View>
                </View>
                <View style={[styles.reviewRowContainer, reviews.length === 0 && styles.noReviews]}>
                  {reviews.length > 0 ? (
                    <>
                      {reviews.map((review, index) => (
                        <SmallReviewContainer
                          key={index}
                          img1={<Image source={{ uri: review.img1 }} style={styles.reviewImage} />}
                          description={review.description}
                        />
                      ))}
                      <View style={styles.moreContainer}>
                        <TouchableOpacity
                          style={styles.moreIconContainer}
                          activeOpacity={0.8}
                          onPress={handleMorePress}>
                          <Image
                            source={require('../../assets/images/moreicon.png')}
                            style={styles.moreIcon}
                          />
                          <View style={styles.moretextContainer}>
                            <Text style={styles.moreText}>더보기</Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </>
                  ) : (
                    <Text style={styles.noReviewText}>아직 리뷰가 없어요!</Text>
                  )}
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <CommonButton
            buttonText="견적서 저장하기"
            buttonColor="#ffffff"
            textColor="#000000"
            onPress={handleStorageButton}
          />
        </View>
        <CommonModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          navigation={navigation}
          imageSource={require('../../assets/images/check1.png')}
          mainText="견적서 저장 완료"
          sideText={
            '견적서는 "진행상황" 에서 다시 볼 수 있어요.' +
            '\n' +
            '공방에 의뢰 후 대화를 원하실까요?'
          }
          firstButtonText="공방과 대화하기"
          secondButtonText="메인페이지로"
          firstButtonColor="#ffffff"
          secondButtonColor="#666666"
          firstButtonTextColor="#000000"
          secondButtonTextColor="#ffffff"
          onFirstButtonPress={handleFirstButtonPress}
          onSecondButtonPress={handleSecondButtonPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default WorkShopScreen;