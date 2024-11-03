import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './Styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const WorkShopAccept = ({setModalVisible, workshopName}) => {
  const navigation = useNavigation();
  const welcomeText = workshopName ? `${workshopName}공방\n환영합니다!` : "환영합니다!";

  const onClickMain = () => {
    console.log('onClickMain');
    navigation.navigate('LoginScreen');
    setModalVisible(false);
  };
  const sideText = '성공적으로 가입완료 되었습니다.\n가구 제작을 희망하는 사용자를 저희가 찾아드릴께요!';

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#191919'}}>
        <View style={styles.textContainer}>
          <View>
          <Text style={styles.mainText}>{welcomeText}</Text>
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

export default WorkShopAccept;
