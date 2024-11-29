import React, { useEffect } from 'react';
import { Image, ImageBackground, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  FixedContainer,
  ImageContainer,
  LightImage,
  BigLight,
  TextContainer,
  SuccessText,
} from './Styles';

const SuccessProduce = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('CheckScreen');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#191919" }}>
      <Container>
        <FixedContainer>
          <ImageContainer>
            <LightImage
              source={require('../../assets/images/light.png')}
            />
          </ImageContainer>
          <ImageBackground
            source={require('../../assets/images/biglight.png')}
            style={{ width: 350, height: 200, alignSelf: 'center' }}
          >
            <TextContainer>
              <SuccessText>제작완료!</SuccessText>
            </TextContainer>
          </ImageBackground>
        </FixedContainer>
      </Container>
    </SafeAreaView>
  );
};

export default SuccessProduce;