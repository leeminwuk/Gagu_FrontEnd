import React, { useEffect } from 'react';
import { Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Polygon } from 'react-native-svg';
import {
  FixedContainer,
  ImageContainer,
  LightImage,
} from './Styles';

// Animated SVG Polygon
const AnimatedPolygon = Animated.createAnimatedComponent(Polygon);

const LightAnimation = () => {
  const scaleY = useSharedValue(0.5); // Y축 스케일 값
  const opacity = useSharedValue(0.3); // 투명도 값
  const { height } = Dimensions.get('window');

  useEffect(() => {
    // Y축 스케일 애니메이션 반복 설정
    scaleY.value = withRepeat(
      withTiming(0.7, { duration: 2000 }), // 커짐
      -1, // 무한 반복
      true // 역방향 실행 (작아짐)
    );

    // 투명도 애니메이션 반복 설정
    opacity.value = withRepeat(
      withTiming(0.7, { duration: 2000 }), // 투명도가 증가
      -1, // 무한 반복
      true // 역방향 실행 (투명도가 감소)
    );
  }, []);

  // Animated Props를 사용하여 SVG 속성에 애니메이션 값 전달
  const animatedProps = useAnimatedProps(() => ({
    points: `
      ${80},0 
      ${120},0 
      ${200},${200 * scaleY.value} 
      ${0},${200 * scaleY.value}
    `,
    fillOpacity: opacity.value, 
  }));

  return (
    <FixedContainer>
      <ImageContainer>
        <LightImage source={require('../../assets/images/light.png')} />

        <Svg height="400" width="200" style={{ position: 'absolute', bottom: height * -0.457 }}>
          <AnimatedPolygon animatedProps={animatedProps} fill="gray" />
        </Svg>
      </ImageContainer>
    </FixedContainer>
  );
};

export default LightAnimation;
