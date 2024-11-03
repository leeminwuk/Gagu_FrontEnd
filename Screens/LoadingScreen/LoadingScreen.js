import React, { useEffect, useRef } from 'react';
import { Animated, View, Easing, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../Components/BackButton/BackButton';
import LoadingAnimation from '../../Components/LightAnimation/LightAnimaion';
import styles from './Styles';
import { getWebSocketInstance } from '../../api/chat2d';

const LoadingScreen = () => {
  const navigation = useNavigation();
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

    const webSocket = getWebSocketInstance(); // 기존 웹소켓 인스턴스를 가져옴

    const handleMessage = (message) => {
      console.log('Received message:', message);
      navigation.navigate('SuccessProduce', { transition: 'fade' });
    };

    if (webSocket) {
      webSocket.onmessage = handleMessage; // 메시지 수신 핸들러 설정
    } else {
      console.error('WebSocket instance is not available');
    }

    return () => {
      if (webSocket) {
        webSocket.onmessage = null; // 컴포넌트가 언마운트될 때 메시지 핸들러 제거
      }
    };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#191919' }}>
      <BackButton navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.fixedContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>
              의자 도면을 제작중입니다{'\n'}잠시만 기달려주세요.
            </Text>
          </View>
          <LoadingAnimation />
          <View style={styles.loadingBar}>
            <View style={styles.innerBar}>
              <View style={styles.dotContainer}>
                <Animated.View
                  style={[
                    styles.dot,
                    {
                      transform: [
                        {
                          translateY: dot1.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, -5],
                          }),
                        },
                      ],
                    },
                  ]}
                />
                <Animated.View
                  style={[
                    styles.dot,
                    {
                      transform: [
                        {
                          translateY: dot2.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, -5],
                          }),
                        },
                      ],
                    },
                  ]}
                />
                <Animated.View
                  style={[
                    styles.dot,
                    {
                      transform: [
                        {
                          translateY: dot3.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, -5],
                          }),
                        },
                      ],
                    },
                  ]}
                />
                <Animated.View
                  style={[
                    styles.dot,
                    {
                      transform: [
                        {
                          translateY: dot4.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, -5],
                          }),
                        },
                      ],
                    },
                  ]}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoadingScreen;