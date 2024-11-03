import React , {useEffect}from 'react';
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
  const handleProduceButtonPress = () => {
    navigation.navigate('StorageDetailScreen');
  }
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <ImageBackground
          source={require('../../assets/images/storage.png')}
          style={styles.backgroundImage}>
          <MainHeader />
          <Notice />

          <View style={styles.textContainer}>
            <Text style={styles.overlayText}>
              가구의 도면을 보여주고{'\n'}공방과 연결해드립니다.
            </Text>
          </View>
          <View style={styles.startButton}>
            <TouchableOpacity onPress={handleProduceButtonPress} activeOpacity={0.8}>
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
    </View>
  );
};

export default ProduceScreen;
