import React from 'react';
import {Image, SafeAreaView, ScrollView} from 'react-native';
import BackButton from '../../Components/BackButton/BackButton';
import CheckRenderStorage from '../../Components/CheckRender/CheckRenderStorage';
import {
  Container,
  TextContainer,
  MainText,
  MiniTextContainer,
  MiniText,
  DescriptionText,
  PriceText,
  ImageBox,
  ImageContainer,
  ChairImage,
  SolidImageContainer,
} from './Styles';
import CommonButton from '../../Button/CommonButton/CommonButton';

const EstimateDetailScreen = ({navigation, route}) => {
  const {estimates} = route.params;
  const item = estimates.content.find(est => est !== null) || {};

  const formatDate = dateString => {
    const dateParts = dateString.split(' ')[0].split('-');
    if (dateParts.length !== 3) {
      return '2000년 01월 01일';
    }
    const [year, month, day] = dateParts;
    return `${year}년 ${month}월 ${day}일`;
  };

  const formatPrice = price => {
    return Number(price).toLocaleString('ko-KR');
  };
  const handlePayment = () => {
    navigation.navigate('ResponsePaymentScreen', {
      item: {
        createdDate: item.createdDate,
        furnitureName: item.furnitureName,
        furniture2DUrl: item.furniture2DUrl,
        price: item.price,
      },
    });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#191919'}}>
      <BackButton navigation={navigation} />
      <Container>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <TextContainer>
            <MainText>
              {item.createdDate
                ? formatDate(item.createdDate)
                : '2000년 01월 01일'}{' '}
              제작된{'\n'}
              {item.furnitureName || '가구 이름'} 입니다.
            </MainText>
            <MiniTextContainer>
              <MiniText>설명</MiniText>
              <DescriptionText>
                {item.description || '설명 없음'}
              </DescriptionText>
            </MiniTextContainer>
            <MiniTextContainer>
              <MiniText>가격</MiniText>
              <PriceText>
                {item.price ? formatPrice(item.price) : '0'}원
              </PriceText>
            </MiniTextContainer>
          </TextContainer>
          <MiniTextContainer>
            <MiniText>가구 평면도</MiniText>
          </MiniTextContainer>
          <ImageBox>
            <ImageContainer>
              <ChairImage source={{uri: item.furniture2DUrl}} />
            </ImageContainer>
          </ImageBox>
          <MiniTextContainer>
            <MiniText>3D 도면</MiniText>
          </MiniTextContainer>
          <SolidImageContainer>
            <CheckRenderStorage gltfUrl={item.furnitureGltfUrl || ''} />
          </SolidImageContainer>
        </ScrollView>
        <CommonButton
          buttonColor="#ffffff"
          buttonText="결제 하기"
          textColor='#000000'
          onPress={handlePayment}
        />
      </Container>
    </SafeAreaView>
  );
};

export default EstimateDetailScreen;
