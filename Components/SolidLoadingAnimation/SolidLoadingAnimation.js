import React, {useEffect, useRef, useState} from 'react';
import {Animated, View, Easing, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './Styles';

const SolidAnimation = () => {
  const [size, setSize] = useState({w: 100, h: 25});
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const navigation = useNavigation();

  return (
    <View style={styles.fixedContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/solid.png')}
            style={styles.solidImage}
          />
        </View>
      </View>
  );
};

export default SolidAnimation;
