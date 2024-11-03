import React, {useState} from 'react';
import {TouchableOpacity, Text, Image, Modal, View} from 'react-native';
import styles from './Styles';
import SignupAccept from '../../Modal/SignupAccept/SignupAccept';
import { onPressGoogleBtn } from '../../api/googleSignup';
import { useNavigation } from '@react-navigation/native';
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
      <TouchableOpacity
        onPress={handleSignup}
        style={styles.googleButton}
        activeOpacity={0.9}>
        <Image
          source={require('../../assets/images/GoogleLogo.png')}
          style={styles.googleIcon}
        />
        <View style={styles.textContainer}>
        <Text style={styles.googleText}>Google 계정으로 로그인</Text>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <SignupAccept setModalVisible={setModalVisible} 
          mainText = "로그인 완료"
          sideText = {'다시 돌아온 것을 환영합니다.\n원하는 가구를 제작하러 가볼까요?'}
          navigationTo="BottomTabNavigator"
          />
      </Modal>
    </>
  );
};

export default GoogleLoginButton;