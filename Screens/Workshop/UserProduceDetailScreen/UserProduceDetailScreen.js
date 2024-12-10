import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import styles from './Styles';
import BackButton from '../../../Components/BackButton/BackButton';
import CommonButton from '../../../Button/CommonButton/CommonButton';
import CheckRender from '../../../Components/CheckRender/CheckRender';
import {ScrollView} from 'react-native-gesture-handler';
const UserProduceDetailScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonPress1 = () => {
    navigation.navigate('SendEstimateScreen');
  };
  const handleARViewer = () => {
    navigation.navigate('ArViewer');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#191919'}}>
      <BackButton navigation={navigation} />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <View style={styles.fixedContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.mainText}>
                2024년 5월 16일 제작된{'\n'}
                나무의자 입니다.
              </Text>
            </View>
            <View style={styles.miniTextContainer}>
              <Text style={styles.miniText}>가구 평면도</Text>
            </View>
            <View style={styles.imageBox}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('../../../assets/images/2dchair.png')}
                  style={styles.chairImage}
                />
              </View>
            </View>
            <View style={styles.arContainer}>
              <View style={styles.miniTextContainer}>
                <Text style={styles.miniText}>3D 도면</Text>
              </View>
              <TouchableOpacity
                style={styles.rotateContainer}
                onPress={handleARViewer}>
                <Image
                  source={require('../../../assets/images/rotate.png')}
                  style={styles.rotateButton}
                />
                <Text style={styles.rotateText}>공간에서 보기</Text>
              </TouchableOpacity>
            </View>
            <View>
              <CheckRender />
            </View>
            <View>
              <CommonButton
                buttonText="견적서 보내기"
                buttonColor="#ffffff"
                textColor="#000000"
                onPress={handleButtonPress1}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserProduceDetailScreen;
