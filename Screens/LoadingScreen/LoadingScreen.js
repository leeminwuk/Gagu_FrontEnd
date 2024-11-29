import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../Components/BackButton/BackButton';
import LoadingAnimation from '../../Components/LightAnimation/LightAnimaion';
import DotAnimate from '../../Components/DotAnimate/DotAnimate';
import {
  Container,
  FixedContainer,
  MainText,
} from './Styles';
import { getWebSocketInstance } from '../../api/chat2d';

const LoadingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
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
      <Container>
        <FixedContainer>
            <MainText>
              의자 도면을 제작중입니다{'\n'}잠시만 기달려주세요.
            </MainText>
          <LoadingAnimation />
          <DotAnimate />
        </FixedContainer>
      </Container>
    </SafeAreaView>
  );
};

export default LoadingScreen;