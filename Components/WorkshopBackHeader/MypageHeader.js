import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './Styles';

const MypageHeader = ({navigation, titleText}) => {
  const handlerBack = () => {
    navigation.goBack();
  };
    return (
    <View style={styles.Headercontainer}>
      <View style={styles.backbuttonContainer}>
        <TouchableOpacity onPress={handlerBack} activeOpacity={0.8}>
          <Image
            source={require('../../assets/images/backButton.png')}
            style={styles.backButton}
          />
        </TouchableOpacity>
      </View>
       <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/miniLogo.png')}
            style={styles.logo}
          />
       </View>
    </View>
  );
};

export default MypageHeader;
