import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, SafeAreaView, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Title from './Title/Title';
import CommonButton from '../../Button/CommonButton';
import CommonModal from '../../Modal/CommonModal';
import { createChatRoom } from '../../api/createChat';
import { getToken, saveNickname } from '../../utils/storage';
import detailWorkshop from '../../api/detailWorkshop'; 
import { checkReview } from '../../api/checkReview';
import { UserInfo } from '../../api/userInfo';
import SmallReviewContainer from '../../Components/SmallReviewContainer/SmallReviewContainer';
import {
  Container,
  CloseButtonContainer,
  CloseButton,
  ImageContainer,
  ImageStyled,
  ContentsContainer,
  OpinionContainer,
  OpinionTitleContainer,
  OpImageContainer,
  OpinionImage,
  OpniTitleContainer,
  OpinionTitle,
  OpinionContentsContainer,
  OpinionContents,
  ReviewContainer,
  ReviewTitleContainer,
  ReviewIconContainer,
  ReviewIcon,
  ReviewTextContainer,
  ReviewTitleText,
  ReviewRowContainer,
  NoReviews,
  ReviewImage,
  MoreContainer,
  MoreIconContainer,
  MoreIcon,
  MoreTextContainer,
  MoreText,
  ButtonContainer,
  NoReviewText,
} from './Styles';

const { height } = Dimensions.get('window');

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
          await saveNickname(userInfo.nickname); // 닉네임 저장
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
        navigation.navigate('ChatScreen', { shopname: workshopDetails.workshopName, item, isWorkshop: false, nickname });
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
      <Container>
        <CloseButtonContainer onPress={handleBackButton} activeOpacity={0.8}>
          <CloseButton source={require('../../assets/images/backButton.png')} />
        </CloseButtonContainer>
        <ImageContainer>
          <ImageStyled source={require('../../assets/images/workshop.png')} />
        </ImageContainer>
        <Title
          nameText={workshopDetails.workshopName}
          locationText={workshopDetails.address}
          costText={'10,000원'}
        />
          <ContentsContainer>
            <OpinionContainer>
              <OpinionTitleContainer>
                <OpImageContainer>
                  <OpinionImage source={require('../../assets/images/opinionicon.png')} />
                </OpImageContainer>
                <OpniTitleContainer>
                  <OpinionTitle>공방 의견</OpinionTitle>
                </OpniTitleContainer>
              </OpinionTitleContainer>
              <OpinionContentsContainer>
                <OpinionContents>{workshopDetails.description}</OpinionContents>
              </OpinionContentsContainer>
              <ReviewContainer>
                <ReviewTitleContainer>
                  <ReviewIconContainer>
                    <ReviewIcon source={require('../../assets/images/reviewicon.png')} />
                  </ReviewIconContainer>
                  <ReviewTextContainer>
                    <ReviewTitleText>공방 리뷰</ReviewTitleText>
                  </ReviewTextContainer>
                </ReviewTitleContainer>
                <ReviewRowContainer style={reviews.length === 0 && NoReviews}>
                  {reviews.length > 0 ? (
                    <>
                      {reviews.map((review, index) => (
                        <SmallReviewContainer
                          key={index}
                          img1={<Image source={{ uri: review.img1 }} style={ReviewImage} />}
                          description={review.description}
                        />
                      ))}
                      <MoreContainer>
                        <MoreIconContainer onPress={handleMorePress} activeOpacity={0.8}>
                          <MoreIcon source={require('../../assets/images/moreicon.png')} />
                          <MoreTextContainer>
                            <MoreText>더보기</MoreText>
                          </MoreTextContainer>
                        </MoreIconContainer>
                      </MoreContainer>
                    </>
                  ) : (
                    <NoReviewText>아직 리뷰가 없어요!</NoReviewText>
                  )}
                </ReviewRowContainer>
              </ReviewContainer>
            </OpinionContainer>
          </ContentsContainer>
        <ButtonContainer>
          <CommonButton
            buttonText="견적서 저장하기"
            buttonColor="#ffffff"
            textColor="#000000"
            onPress={handleStorageButton}
          />
        </ButtonContainer>
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
      </Container>
    </SafeAreaView>
  );
};

export default WorkShopScreen;