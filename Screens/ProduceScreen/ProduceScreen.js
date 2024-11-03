import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './Styles';
import MainHeader from '../../Components/MainHeader/MainHeader';
import Notice from '../../Components/Notice/Notice';

const ProduceScreen = () => {
  const navigation = useNavigation();

  const handleProduceButtonPress = () => {
    navigation.navigate('PromptScreen');
  };

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('../../assets/images/produce.png')}
        style={styles.backgroundImage}>
        <MainHeader />
        <Notice />
        <View style={styles.textContainer}>
          <Text style={styles.overlayText}>
            원하는 가구를 입력하면{'\n'}도면 제작 해드립니다.
          </Text>
        </View>
        <View style={styles.startButton}>
          <TouchableOpacity
            onPress={handleProduceButtonPress}
            activeOpacity={0.8}>
            <Text style={styles.startText}>가구 제작 하러가기</Text>
            <View style={styles.startArrowContainer}>
              <View style={styles.startArrow}></View>
              <View style={styles.arrowCircle}>
                <View style={styles.rightArrow}>
                  <Image
                    source={require('../../assets/images/rightArrow.png')}
                    style={styles.rightArrowImage}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProduceScreen;