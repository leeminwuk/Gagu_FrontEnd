import React, { useEffect, useState } from 'react';
import { Animated, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  FixedContainer,
  ImageContainer,
  LightImage,
  AnimationImage,
} from './Styles';

const LightAnimation = () => {
  const [size, setSize] = useState({ w: 100, h: 25 });
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const navigation = useNavigation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSize(prevSize => {
        if (prevSize.w >= 180) {
          return { w: 100, h: 25 };
        } else {
          return { w: prevSize.w + 20, h: prevSize.h + 10 };
        }
      });
    }, 500);

    Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ).start();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <FixedContainer>
      <ImageContainer>
        <LightImage
          source={require('../../assets/images/light.png')}
        />
      </ImageContainer>
      <AnimationImage>
        <Image
          source={require('../../assets/images/reallight.png')}
          style={{ width: size.w, height: size.h }}
        />
      </AnimationImage>
    </FixedContainer>
  );
};

export default LightAnimation;