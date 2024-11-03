import {View, TouchableOpacity, Text, Image} from 'react-native';
import React from 'react';
import styles from './Styles';
import {useNavigation} from '@react-navigation/native';

const StartButton = () => {
  const navigation = useNavigation();

  const handleToSignup = () => {
    navigation.navigate('SignupScreen');
  };
  const handleToLogin = () => {
    navigation.navigate('LoginScreen');
  };
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.startButton}
        onPress={handleToSignup}
        activeOpacity={0.7}>
        <View style={styles.startButtonEnd}>
          <Text style={styles.startText}>시작하기</Text>
        </View>
        <View style={styles.arrowImage}>
          <Image
            source={require('../../assets/images/rightArrow.png')}
            style={styles.rightArrow}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.immediatelyButton}
        activeOpacity={0.6}
        onPress={handleToLogin}>
        <View style={styles.immediatelyButtonEnd}>
          <Text style={styles.idText}>이미 계정이 있어요</Text>
        </View>
        <View style={styles.personImage}>
          <Image
            source={require('../../assets/images/person.png')}
            style={styles.person}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default StartButton;
