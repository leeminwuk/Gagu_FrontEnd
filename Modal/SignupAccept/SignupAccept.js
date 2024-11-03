import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './Styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const SignupAccept = ({setModalVisible, mainText, sideText, navigationTo}) => {
  const navigation = useNavigation();

  const onClickMain = () => {
    navigation.navigate(navigationTo);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#191919'}}>
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.mainText}>{mainText}</Text>
          </View>
          <View style={styles.sideTextBox}>
            <Text style={styles.sideText}>
                {sideText}
            </Text>
          </View>
          <View style={styles.startButton}>
            <TouchableOpacity onPress={onClickMain} activeOpacity={0.8}>
              <Text style={styles.startText}>시작하기</Text>
              <View style={styles.startArrowContainer}>
                <View style={styles.startArrow}></View>
                <View style={styles.arrowCircle}></View>
                <View style={styles.rightArrow}>
                  <Image
                    source={require('../../assets/images/rightArrow.png')}
                    style={styles.rightArrowImage}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupAccept;
