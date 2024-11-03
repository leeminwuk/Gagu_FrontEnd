import React, { useState } from 'react';
import { TouchableOpacity, Text, Image, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';
import { handleLogin } from '../../api/kakaoSignup';

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
      <TouchableOpacity
        style={styles.kakaoButton}
        activeOpacity={0.9}
        onPress={handleSignup}>
        <Image
          source={require('../../assets/images/KakaoLogo.png')}
          style={styles.kakaoIcon}
        />
        <View style={styles.textContainer}>
        <Text style={styles.kakaoText}>Kakao 계정으로 가입</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default KakaoSignupButton;