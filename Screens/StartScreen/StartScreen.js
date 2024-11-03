import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Styles';
import StartButton from '../../Button/StartButton/StartButton';

const StartScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/background.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.logoBox}>
        <View style={styles.logo}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.sideTextContainer}>
          <Text style={styles.sideText}>원하는 가구를 내 손안에</Text>
        </View>
      </View>
      <StartButton />
    </View>
  );
};
export default StartScreen;
