import React, { useState } from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';
import { onPressGoogleBtn } from '../../api/googleSignup';

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
      <TouchableOpacity
        onPress={handleSignup}
        style={styles.googleButton}
        activeOpacity={0.9}>
        <Image
          source={require('../../assets/images/GoogleLogo.png')}
          style={styles.googleIcon}
        />
        <View style={styles.textContainer}>
        <Text style={styles.googleText}>Google 계정으로 가입</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default GoogleSignupButton;