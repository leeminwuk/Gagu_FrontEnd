import React, {useEffect, useRef, useState} from 'react';
import {Animated, View, Easing, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './Styles';

const RequestLoading = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.fixedContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/toycar.png')}
            style={styles.carImage}
          />
        </View>
      </View>
  );
};

export default RequestLoading;
