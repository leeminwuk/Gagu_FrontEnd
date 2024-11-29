import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainHeader from '../../Components/MainHeader/MainHeader';
import Notice from '../../Components/Notice/Notice';
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
    navigation.navigate('StorageDetailScreen');
  };

  return (
    <Container>
      <MainContainer>
        <BackgroundImage source={require('../../assets/images/storage.png')}>
          <MainHeader />
          <Notice />
          <TextContainer>
            <OverlayText>
              가구의 도면을 보여주고{'\n'}공방과 연결해드립니다.
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
          </StartButton>
        </BackgroundImage>
      </MainContainer>
    </Container>
  );
};

export default ProduceScreen;