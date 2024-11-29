import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import {
  LoadingBar,
  InnerBar,
  DotContainer,
  Dot,
} from './Styles';

const DotAnimate = () => {
  const dot1 = useRef(new Animated.Value(0)).current;
  const dot2 = useRef(new Animated.Value(0)).current;
  const dot3 = useRef(new Animated.Value(0)).current;
  const dot4 = useRef(new Animated.Value(0)).current;

  const animate = dot => {
    return Animated.sequence([
      Animated.timing(dot, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.sin),
      }),
      Animated.timing(dot, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.sin),
      }),
    ]);
  };

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        animate(dot1),
        animate(dot2),
        animate(dot3),
        animate(dot4),
      ]),
    ).start();
  }, []);

  return (
    <LoadingBar>
      <InnerBar>
        <DotContainer>
          <Dot
            style={{
              transform: [
                {
                  translateY: dot1.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -5],
                  }),
                },
              ],
            }}
          />
          <Dot
            style={{
              transform: [
                {
                  translateY: dot2.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -5],
                  }),
                },
              ],
            }}
          />
          <Dot
            style={{
              transform: [
                {
                  translateY: dot3.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -5],
                  }),
                },
              ],
            }}
          />
          <Dot
            style={{
              transform: [
                {
                  translateY: dot4.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -5],
                  }),
                },
              ],
            }}
          />
        </DotContainer>
      </InnerBar>
    </LoadingBar>
  );
};

export default DotAnimate;