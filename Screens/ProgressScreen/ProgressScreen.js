import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainHeader from '../../Components/MainHeader/MainHeader';
import {
  Container,
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
    navigation.navigate('ProgressDetailScreen');
  };

  return (
    <Container>
      <MainContainer>
        <BackgroundImage source={require('../../assets/images/progress.png')}>
          <MainHeader />
          <TextContainer>
            <OverlayText>
              의뢰한 가구의{'\n'}진행사항을 알려드립니다.
            </OverlayText>
          </TextContainer>
          <StartButton>
            <TouchableOpacity onPress={handleProduceButtonPress} activeOpacity={0.8}>
              <StartText>진행사항 보러가기</StartText>
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
    </Container>
  );
};

export default ProduceScreen;