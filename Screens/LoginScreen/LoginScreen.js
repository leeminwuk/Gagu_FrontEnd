import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './Styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import GoogleLoginButton from '../../Button/LoginButton/GoogleButton';
import KakaoLoginButton from '../../Button/LoginButton/KakaoButton';

const LoginScreen = ({navigation}) => {
  const handleShopSignup = () => {
    navigation.navigate('WorkshopLoginScreen');
  };
  const sideText =
    '돌아오신 것을 환영합니다 :)\n기존에 가입한 계정으로 로그인 해주세요!';
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/background.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.singupText}>로그인</Text>
        </View>
        <View style={styles.sideTextBox}>
          <Text style={styles.sideText}>{sideText}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        {/* <GoogleLoginButton /> */}
        <KakaoLoginButton />
        <View style={styles.shopButton}>
          <TouchableOpacity activeOpacity={0.7} onPress={handleShopSignup}>
            <Text style={styles.shopText}>공방 관계자로 로그인 할래요</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
