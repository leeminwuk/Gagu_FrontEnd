import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, Image, Alert, ScrollView, SafeAreaView } from 'react-native';
import BackButton from '../../Components/BackButton/BackButton';
import CommonButton from '../../Button/CommonButton/CommonButton';
import CommonModal from '../../Modal/CommonModal';
import { getToken } from '../../utils/storage';
import removeFurniture from '../../api/removeFuniture'; 
import CheckRenderStorage from '../../Components/CheckRender/CheckRenderStorage';
import {
  Container,
  MainText,
  MiniTextContainer,
  MiniText,
  ImageBox,
  ImageContainer,
  FlatImage,
  RotateContainer,
  RotateButton,
  RotateText,
  FixedContainer,
  SolidImageContainer,
  ButtonWrapper,
} from './Styles';

const ProduceDetailScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = await getToken();
        setToken(token);
        console.log('Token fetched:', token); 
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    fetchToken();
  }, []);

  const handleButtonPress1 = () => {
    navigation.navigate('RequestLoading', { item });
  };

  const handleButtonPress2 = () => {
    setModalVisible(true);
  };

  const handleFirstButtonPress = async () => {
    try {
      const response = await removeFurniture(item.id, token);
      
      if (response === '성공했습니다.') {
        navigation.navigate('StorageDetailScreen', { refresh: true });
      } else {
        Alert.alert('오류', response || '알 수 없는 오류가 발생했습니다.');
        console.error(response || '알 수 없는 오류가 발생했습니다.');
      }
    } catch (error) {
      Alert.alert('오류', '도면 삭제 중 오류가 발생했습니다.');
      console.error(error);
    } finally {
      setModalVisible(false);
    }
  };

  const handleSecondButtonPress = () => {
    setModalVisible(false);
  };

  const handlerBack = () => {
    navigation.goBack();
  };

  const handleGoToMainButtonPress = () => {
    navigation.navigate('MainScreen');
  };

  const handleARViewer = () => {
    navigation.navigate('ArViewer', { modelUrl: item.furnitureGlbUrl });
  };

  const formatDate = dateString => {
    const dateParts = dateString.split(' ')[0].split('-');
    if (dateParts.length !== 3) {
      return '2000년 01월 01일'; // 기본 날짜 설정
    }
    const [year, month, day] = dateParts;
    return `${year}년 ${month}월 ${day}일`;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#191919' }}>
      <BackButton navigation={navigation} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Container>
          <FixedContainer>
            <MainText>
              {formatDate(item.createdDate)} 제작된{'\n'}
              {item.furnitureName} 입니다.
            </MainText>
            <MiniTextContainer>
              <MiniText>가구 평면도</MiniText>
            </MiniTextContainer>
            <ImageBox>
              <ImageContainer>
                <FlatImage source={{ uri: item.furniture2DUrl }} />
              </ImageContainer>
            </ImageBox>
            <MiniTextContainer>
              <MiniText>3D 도면</MiniText>
            </MiniTextContainer>
            <RotateContainer onPress={handleARViewer}>
              <RotateButton source={require('../../assets/images/rotate.png')} />
              <RotateText>공간에서 보기</RotateText>
            </RotateContainer>
            <SolidImageContainer>
            <CheckRenderStorage gltfUrl={item.furnitureGltfUrl} />
            </SolidImageContainer>
            <ButtonWrapper>
              <CommonButton
                buttonText="공방에 가구 제작 의뢰하기"
                buttonColor="#ffffff"
                textColor="#000000"
                onPress={handleButtonPress1}
              />
            </ButtonWrapper>
            <ButtonWrapper>
              <CommonButton
                buttonText="도면 삭제하기"
                buttonColor="#696969"
                textColor="#ffffff"
                onPress={handleButtonPress2}
              />
            </ButtonWrapper>
            <CommonModal
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              navigation={navigation}
              imageSource={require('../../assets/images/warning.png')}
              mainText="삭제확인"
              sideText={
                '도면을 삭제하면 처음부터 다시 제작해야합니다\n삭제하시겠습니까?'
              }
              secondButtonColor="#454545"
              firstButtonColor="#ffffff"
              secondButtonText="돌아가기"
              firstButtonText="삭제"
              firstButtonTextColor="#000000"
              secondButtonTextColor="#ffffff"
              onFirstButtonPress={handleFirstButtonPress}
              onSecondButtonPress={handleSecondButtonPress}
            />
          </FixedContainer>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProduceDetailScreen;