import React, { useState } from 'react';
import { Modal, View } from 'react-native';
import SignupAccept from '../../Modal/SignupAccept/SignupAccept';
import { onPressGoogleBtn } from '../../api/googleSignup';
import { useNavigation } from '@react-navigation/native';
import {
  GoogleButton,
  GoogleIcon,
  GoogleText,
  TextContainer,
} from './Styles';

const GoogleLoginButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const success = await onPressGoogleBtn();
      return success;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const handleSignup = async () => {
    const success = await handleLogin();
    if (success) {
      setModalVisible(true);
    } else {
      console.error('구글 로그인 실패');
    }
  };

  return (
    <>
      <GoogleButton onPress={handleSignup} activeOpacity={0.9}>
        <GoogleIcon
          source={require('../../assets/images/GoogleLogo.png')}
        />
        <TextContainer>
          <GoogleText>Google 계정으로 로그인</GoogleText>
        </TextContainer>
      </GoogleButton>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <SignupAccept
          setModalVisible={setModalVisible}
          mainText="로그인 완료"
          sideText={'다시 돌아온 것을 환영합니다.\n원하는 가구를 제작하러 가볼까요?'}
          navigationTo="BottomTabNavigator"
        />
      </Modal>
    </>
  );
};

export default GoogleLoginButton;