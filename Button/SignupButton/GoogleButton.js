import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { onPressGoogleBtn } from '../../api/googleSignup';
import {
  GoogleButton,
  GoogleIcon,
  GoogleText,
  TextContainer,
} from './Styles';

const GoogleSignupButton = () => {
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
      // navigation.navigate('AddressScreen');
    } else {
      setModalVisible(true);
    }
  };

  return (
    <>
      <GoogleButton onPress={handleSignup} activeOpacity={0.9}>
        <GoogleIcon
          source={require('../../assets/images/GoogleLogo.png')}
        />
        <TextContainer>
          <GoogleText>Google 계정으로 가입</GoogleText>
        </TextContainer>
      </GoogleButton>
    </>
  );
};

export default GoogleSignupButton;