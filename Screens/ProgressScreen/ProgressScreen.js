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

const ProduceScreen = () => {
  const handleProduceButtonPress = () => {
    navigation.navigate('ProgressDetailScreen');
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <ImageBackground
          source={require('../../assets/images/progress.png')}
          style={styles.backgroundImage}>
          <MainHeader />

          <View style={styles.textContainer}>
            <Text style={styles.overlayText}>
              의뢰한 가구의{'\n'}진행사항을 알려드립니다.
            </Text>
          </View>
          <View style={styles.startButton}>
            <TouchableOpacity
              onPress={handleProduceButtonPress}
              activeOpacity={0.8}>
              <Text style={styles.startText}>진행사항 보러가기</Text>
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
    </View>
  );
};

export default ProduceScreen;
