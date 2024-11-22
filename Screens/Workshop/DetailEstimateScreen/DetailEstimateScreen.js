import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import BackButton from '../../../Components/BackButton/BackButton';
import CommonButton from '../../../Button/CommonButton';
import CheckRenderStorage from '../../../Components/CheckRender/CheckRenderStorage';
import styles from './Styles';

const DetailEstimateScreen = ({ navigation, route }) => {
  const { item } = route.params;

  const handleButtonPress = () => {
    navigation.navigate('PaymentScreen', { itemId: item.id });
  };

  const handleARViewer = () => {
    navigation.navigate('ArViewer', { modelUrl: item.furnitureGlbUrl });
  };

  const formatDate = dateString => {
    const dateParts = dateString.split(' ')[0].split('-');
    if (dateParts.length !== 3) {
      return '2000년 01월 01일'; // 기본 날짜 설정
    }
    const [year, month, day] = dateParts;
    return `${year}년 ${month}월 ${day}일`;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#191919' }}>
      <BackButton navigation={navigation} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.fixedContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.mainText}>
                {formatDate(item.createdDate)} 제작된{'\n'}
                {item.furnitureName} 입니다.
              </Text>
            </View>
            <View style={styles.miniTextContainer}>
              <Text style={styles.miniText}>가구 평면도</Text>
            </View>
            <View style={styles.imageBox}>
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: item.furniture2DUrl }}
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
            <View style={{height: 400}}>
              <CheckRenderStorage gltfUrl={item.furnitureGltfUrl} />
            </View>
            <View>
              <CommonButton
                buttonText="견적서 작성하기"
                buttonColor="#ffffff"
                textColor="#000000"
                onPress={handleButtonPress}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailEstimateScreen;