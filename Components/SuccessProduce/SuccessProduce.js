import React, { useEffect } from 'react';
import {View, Text, Image, ImageBackground, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';

const SuccessProduce = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('CheckScreen');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1,  backgroundColor:"#191919"}}>

    <View style={styles.container}>
      <View style={styles.fixedContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/light.png')}
            style={styles.lightImgae}
          />
        </View>
        <View>
          <ImageBackground
            source={require('../../assets/images/biglight.png')}
            style={styles.bigLight}>
              <View style={styles.textContainer}>
                <Text style={styles.successText}>제작완료!</Text>
              </View>
          </ImageBackground>
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
};

export default SuccessProduce;