import React, {useState} from 'react';
import {TouchableOpacity, Text, Image, Modal, View} from 'react-native';
import styles from './Styles';
import SignupAccept from '../../Modal/SignupAccept/SignupAccept';
import { useNavigation } from '@react-navigation/native';
import { handleLogin } from '../../api/kakaoSignup';
const KakaoLoginButton = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleSignIn = async () => {
    const success = await handleLogin();
    if (success) {
      setModalVisible(true);
    } else {
      console.error('카카오 로그인 실패');
    }
  };
  return (
    <>
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
      <TouchableOpacity
        style={styles.kakaoButton}
        activeOpacity={0.9}
        onPress={handleSignIn}>
        <Image
          source={require('../../assets/images/KakaoLogo.png')}
          style={styles.kakaoIcon}
        />
        <View style={styles.textContainer}>
        <Text style={styles.kakaoText}>Kakao 계정으로 로그인</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default KakaoLoginButton;