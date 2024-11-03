import React, {useEffect, useRef, useState} from 'react';
import {Animated, View, Easing, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './Styles';

const LightAnimation = () => {
  const [size, setSize] = useState({w: 100, h: 25});
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const navigation = useNavigation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSize(prevSize => {
        if (prevSize.w >= 180) {
          return {w: 100, h: 25};
        } else {
          return {w: prevSize.w + 20, h: prevSize.h + 10};
        }
      });
    }, 500);

    Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ).start();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <View style={styles.fixedContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/light.png')}
            style={styles.lightImage}
          />
        </View>
        <View style={styles.animationImage}>
          <Image
            source={require('../../assets/images/reallight.png')}
            style={{...styles.animation, width: size.w, height: size.h}}
          />
        </View>
      </View>
  );
};

export default LightAnimation;
