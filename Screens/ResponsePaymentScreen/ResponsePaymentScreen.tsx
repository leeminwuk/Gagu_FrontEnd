import React from 'react';
import { Image, ScrollView } from 'react-native';
import { SafeArea } from '../../Style/Styles';
import {
  SideText,
  EstimateContainer,
  Estimate,
  EstimateText,
  EstimateDate,
  EstimateName,
  EstimateImage,
  EstimateBox,
  OrdererBox,
  OrdererContainer,
  LeftText,
  RightText,
  OrdererText,
  AddressBox,
  Container,
  AddressContainer,
  PlusAddressButton,
  PlusIcon,
  PlusText,
  PaymentContainer,
  PriceText,
  DetailText,
  PriceTextContainer,
  PaymentButton,
  PaymentText,
  ArrowIcon,
} from './Styles';
import BackButton from '../../Components/BackButton/BackButton';
import { useResponsePaymentScreenLogic } from './events';
import { Item } from './types';

const ResponsePaymentScreen = () => {
  const { item, formatDate, formatPrice, handleAddAddress, handlePayment, navigation } = useResponsePaymentScreenLogic();

  return (
    <SafeArea>
      <BackButton
        navigation={navigation}
        titleText="결제"
        image={0}
        onHamburgerPress={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}>
        <Container>
          <EstimateBox>
            <SideText>결제 상품</SideText>
            <EstimateContainer>
              <Estimate>
                <EstimateImage source={{ uri: item.furniture2DUrl }} />
                <EstimateText>
                  <EstimateDate>
                    {item.createdDate
                      ? formatDate(item.createdDate)
                      : '2000년 01월 01일'}
                  </EstimateDate>
                  <EstimateName>
                    {item.furnitureName || '가구 이름'}
                  </EstimateName>
                </EstimateText>
              </Estimate>
            </EstimateContainer>
          </EstimateBox>
          <OrdererBox>
            <SideText>주문자 정보</SideText>
            <OrdererContainer>
              <OrdererText>
                <LeftText>보내는분</LeftText>
                <RightText>이민욱</RightText>
              </OrdererText>
              <OrdererText>
                <LeftText>휴대폰</LeftText>
                <RightText>010-8703-9945</RightText>
              </OrdererText>
              <OrdererText>
                <LeftText>이메일</LeftText>
                <RightText>lmo2914@naver.com</RightText>
              </OrdererText>
            </OrdererContainer>
          </OrdererBox>
          <AddressBox>
            <SideText>배송지</SideText>
            <AddressContainer>
              <PlusAddressButton activeOpacity={0.8} onPress={handleAddAddress}>
                <PlusIcon source={require('../../assets/images/plus.png')} />
                <PlusText>배송지를 추가해주세요</PlusText>
              </PlusAddressButton>
            </AddressContainer>
          </AddressBox>
        </Container>
      </ScrollView>
      <PaymentContainer>
        <PriceTextContainer>
          <PriceText>{item.price ? formatPrice(item.price) : '0'}원</PriceText>
          <DetailText>자세히 보기</DetailText>
        </PriceTextContainer>
        <PaymentButton onPress={handlePayment}>
          <PaymentText>결제하기</PaymentText>
          <ArrowIcon source={require('../../assets/images/arrow.png')} />
        </PaymentButton>
      </PaymentContainer>
    </SafeArea>
  );
};

export default ResponsePaymentScreen;