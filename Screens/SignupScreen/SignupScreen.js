import React from 'react';
import {View, Image, Text} from 'react-native';
import MyGoogleLoginButton from '../../Button/SignupButton/GoogleButton';
import MyKakaoLoginButton from '../../Button/SignupButton/KakaoButton';
import styles from './Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';


const SignupScreen = ({navigation}) => {

  const handleShopSignup = () => {
    navigation.navigate('NumberAuthentication');
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/background.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.singupText}>회원 가입하기</Text>
        </View>
        <View style={styles.sideTextBox}>
         <Text style={styles.sideText}>원하는 가구를 제작하고, 제공하려면{"\n"}회원가입이 필요해요!</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        {/* <MyGoogleLoginButton /> */}
        <MyKakaoLoginButton />
        <View style={styles.shopButton}>
          <TouchableOpacity activeOpacity={0.7} onPress={handleShopSignup}>
          <Text style={styles.shopText}>공방 관계자로 가입 할래요</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;