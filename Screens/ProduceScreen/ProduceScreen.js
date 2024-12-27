import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainHeader from '../../Components/MainHeader/MainHeader';
import Notice from '../../Components/Notice/Notice';
import {
  MainContainer,
  BackgroundImage,
  TextContainer,
  OverlayText,
  StartButton,
  StartText,
  StartArrowContainer,
  StartArrow,
  RightArrow,
  RightArrowImage,
  ArrowCircle,
} from './Styles';

const ProduceScreen = () => {
  const navigation = useNavigation();

  const handleProduceButtonPress = () => {
    navigation.navigate('PromptScreen');
  };
    const handleSearchButtonPress = () => {
      navigation.navigate('SearchWorkShopScreen');
    };
  return (
    <MainContainer>
      <BackgroundImage source={require('../../assets/images/produce.png')}>
        <MainHeader />
        <Notice />
        <TextContainer>
          <OverlayText>
            원하는 가구를 입력하면{'\n'}도면 제작 해드립니다.
          </OverlayText>
        </TextContainer>
        <StartButton>
          <TouchableOpacity onPress={handleProduceButtonPress} activeOpacity={0.8}>
            <StartText>가구 제작 하러가기</StartText>
            <StartArrowContainer>
              <StartArrow />
              <ArrowCircle>
                <RightArrow>
                  <RightArrowImage source={require('../../assets/images/rightArrow.png')} />
                </RightArrow>
              </ArrowCircle>
            </StartArrowContainer>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSearchButtonPress} activeOpacity={0.8}>
            <StartText>제작 없이 공방 찾기</StartText>
            <StartArrowContainer>
              <StartArrow />
              <ArrowCircle>
                <RightArrow>
                  <RightArrowImage source={require('../../assets/images/rightArrow.png')} />
                </RightArrow>
              </ArrowCircle>
            </StartArrowContainer>
          </TouchableOpacity>
        </StartButton>
      </BackgroundImage>
    </MainContainer>
  );
};

export default ProduceScreen;