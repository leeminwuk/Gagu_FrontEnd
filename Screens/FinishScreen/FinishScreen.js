import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from './Styles';
import BackButton from '../../Components/BackButton/BackButton';
import CommonButton from '../../Button/CommonButton';
import CommonModal from '../../Modal/CommonModal';
import CheckRender from '../../Components/CheckRender/CheckRender';
import { getFurnitureName } from '../../utils/storage';
import { saveFurniture } from '../../api/saveFurniture';
import { disconnectWebSocket } from '../../api/chat2d';

const FinishScreen = ({ navigation }) => {
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [furnitureName, setFurnitureName] = useState('');
  const route = useRoute();
  const { glbUrl, gltfUrl, furniture2DUrl } = route.params;

  useEffect(() => {
    const fetchFurnitureName = async () => {
      const name = await getFurnitureName();
      setFurnitureName(name);
    };

    fetchFurnitureName();
  }, []);

  const handleButtonPress1 = async () => {
    try {
      const furnitureData = {
        furnitureName,
        furniture2DUrl,
        furnitureGlbUrl: glbUrl,
        furnitureGltfUrl: gltfUrl,
      };
      const response = await saveFurniture(furnitureData);
      disconnectWebSocket();
      setModalVisible1(true);
    } catch (error) {
      console.error('가구 저장 실패:', error.response ? error.response.data : error.message);
    }
  };

  const handleButtonPress2 = () => {
    setModalVisible2(true);
  };

  const handleProgressButtonPress = () => {
    setModalVisible2(false);
    navigation.navigate('PromptScreen');
  };

  const handleFinishButtonPress1 = () => {
    setModalVisible1(false);
  };

  const handleFinishButtonPress2 = () => {
    setModalVisible2(false);
  };

  const handlerBack = () => {
    navigation.goBack();
  };

  const handleGoToMainButtonPress = () => {
    disconnectWebSocket(); // 웹소켓 종료
    navigation.navigate('BottomTabNavigator');
  };

  const handleARViewer = () => {
    navigation.navigate('ArViewer', { modelUrl: glbUrl });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#191919' }}>
      <BackButton navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.fixedContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>
              제작이 완료되었어요{'\n'}
              돌려서 확인해보세요!
            </Text>
          </View>
          <View style={styles.arContainer}>
            <TouchableOpacity
              style={styles.rotateContainer}
              onPress={handleARViewer}
              activeOpacity={0.7}>
              <Image
                source={require('../../assets/images/rotate.png')}
                style={styles.rotateButton}
              />
              <Text style={styles.rotateText}>공간에서 보기</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 400 }}>
            {gltfUrl && <CheckRender gltfUrl={gltfUrl} />}
          </View>
          <View>
            <CommonButton
              buttonText="제작완료"
              buttonColor="#ffffff"
              textColor="#000000"
              onPress={handleButtonPress1}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <CommonButton
              buttonText="다시 제작해주세요"
              buttonColor="#696969"
              textColor="#ffffff"
              onPress={handleButtonPress2}
            />
          </View>
          <CommonModal
            modalVisible={modalVisible1}
            navigation={navigation}
            imageSource={require('../../assets/images/check1.png')}
            mainText="제작완료"
            sideText={
              '제작이 완료되었어요\n이제부터 나만의 가구를 확인할 수 있어요!'
            }
            firstButtonColor="#ffffff"
            secondButtonColor="#454545"
            firstButtonText="메인페이지로"
            secondButtonText="취소"
            firstButtonTextColor="#000000"
            secondButtonTextColor="#ffffff"
            onFirstButtonPress={handleGoToMainButtonPress}
            onSecondButtonPress={handleFinishButtonPress1}
          />
          <CommonModal
            modalVisible={modalVisible2}
            setModalVisible={setModalVisible2}
            navigation={navigation}
            imageSource={require('../../assets/images/warning.png')}
            mainText="확인필요"
            sideText={`기존에 만든 도면은 삭제됩니다.\n그래도 진행할까요?`}
            firstButtonColor="#ffffff"
            secondButtonColor="#454545"
            firstButtonText="진행"
            secondButtonText="취소"
            firstButtonTextColor="#000000"
            secondButtonTextColor="#ffffff"
            onFirstButtonPress={handleProgressButtonPress}
            onSecondButtonPress={handleFinishButtonPress2}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FinishScreen;