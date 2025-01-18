import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { handleLogin } from '../../api/kakaoSignup';
import {
  KakaoButton,
  KakaoIcon,
  KakaoText,
  TextContainer,
} from './Styles';

const KakaoSignupButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleSignup = async () => {
    const success = await handleLogin();
    if (success) {
      navigation.navigate('AddressScreen');
    } else {
      setModalVisible(true);
    }
  };

  return (
    <>
      <KakaoButton onPress={handleSignup} activeOpacity={0.9}>
        <KakaoIcon
          source={require('../../assets/images/KakaoLogo.png')}
        />
        <TextContainer>
          <KakaoText>Kakao 계정으로 가입</KakaoText>
        </TextContainer>
      </KakaoButton>
    </>
  );
};

export default KakaoSignupButton;