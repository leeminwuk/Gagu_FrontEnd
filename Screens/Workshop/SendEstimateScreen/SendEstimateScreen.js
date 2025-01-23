import React, { useState, useRef } from 'react';
import { View, Text, Image, Animated, TextInput, SafeAreaView, Alert } from 'react-native';
import styles from './Styles';
import BackButton from '../../../Components/BackButton/BackButton';
import TitleText from '../../../Components/TitleText/TitleText';
import CommonButton from '../../../Button/CommonButton/CommonButton';
import OneButtonModal from '../../../Modal/OneButtonMoadl/OneButtonModal';
import { saveEstimate } from '../../../api/estimateSave';

const SendEstimateScreen = ({ navigation, route }) => {
  const mainText = '견적서 보내기';
  const sideText = '가구 견적과 설명을 작성해서 견적을 보내주세요.';
  const { estimateId } = route.params;

  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [priceError, setPriceError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const priceShakeAnimation = useRef(new Animated.Value(0)).current;
  const descriptionShakeAnimation = useRef(new Animated.Value(0)).current;

  const handleMainPress = () => {
    setModalVisible(false);
    navigation.navigate('WorkshopMainScreen');
  };

  const handleSaveEstimate = async () => {
    let hasError = false;

    if (!price) {
      setPriceError(true);
      hasError = true;
      Animated.sequence([
        Animated.timing(priceShakeAnimation, {
          toValue: 10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(priceShakeAnimation, {
          toValue: -10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(priceShakeAnimation, {
          toValue: 10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(priceShakeAnimation, {
          toValue: 0,
          duration: 50,
          useNativeDriver: true,
        }),
      ]).start();
    }

    if (!description) {
      setDescriptionError(true);
      hasError = true;
      Animated.sequence([
        Animated.timing(descriptionShakeAnimation, {
          toValue: 10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(descriptionShakeAnimation, {
          toValue: -10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(descriptionShakeAnimation, {
          toValue: 10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(descriptionShakeAnimation, {
          toValue: 0,
          duration: 50,
          useNativeDriver: true,
        }),
      ]).start();
    }

    if (hasError) {
      return;
    }

    try {
      // 견적서 저장 로직
      const response = await saveEstimate(estimateId, price, description);
      console.log('Save estimate response:', response);
      setModalVisible(true);
    } catch (error) {
      Alert.alert('오류', '견적서를 저장하는 중에 오류가 발생했습니다.');
      console.error('Error saving estimate:', error);
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <BackButton navigation={navigation} />
      <View style={styles.container}>
        <TitleText mainText={mainText} sideText={sideText} />
        <View style={styles.contentContainer}>
          <Animated.View
            style={[
              styles.estimateContainer,
              { transform: [{ translateX: priceShakeAnimation }] },
            ]}
          >
            <View style={styles.estimateTitle}>
              <Image
                source={require('../../../assets/images/moneyicon.png')}
                style={styles.titleIcon}
              />
              <View style={styles.estimateTextContainer}>
                <Text style={styles.estimateText}>견적 가격</Text>
              </View>
            </View>
            <View
              style={[
                styles.estimateInputContainer,
                priceError && styles.errorBorder,
              ]}
            >
              <Image
                source={require('../../../assets/images/wonicon.png')}
                style={styles.wonIcon}
              />
              <TextInput
                style={styles.estimateInput}
                placeholder="금액을 입력해주세요."
                placeholderTextColor={priceError ? '#FF9696' : '#ffffff'}
                value={price}
                onChangeText={(text) => {
                  setPrice(text);
                  setPriceError(false);
                }}
              />
            </View>
          </Animated.View>
          <Animated.View
            style={[
              styles.estimateContainer,
              { transform: [{ translateX: descriptionShakeAnimation }] },
            ]}
          >
            <View style={styles.estimateTitle}>
              <Image
                source={require('../../../assets/images/opinionicon.png')}
                style={styles.titleIcon}
              />
              <View style={styles.estimateTextContainer}>
                <Text style={styles.estimateText}>가구 견적 설명</Text>
              </View>
            </View>
            <View
              style={[
                styles.estimateInputContainer,
                descriptionError && styles.errorBorder,
              ]}
            >
              <TextInput
                style={[styles.estimateInput, styles.multilineInput]}
                placeholder="가구 제작에 대한 의견을 남겨주세요."
                placeholderTextColor={descriptionError ? '#FF9696' : '#ffffff'}
                multiline={true}
                value={description}
                onChangeText={(text) => {
                  setDescription(text);
                  setDescriptionError(false);
                }}
              />
            </View>
          </Animated.View>
        </View>
        <View style={styles.buttonContainer}>
          <CommonButton
            buttonText="견적서 보내기"
            buttonColor="#ffffff"
            textColor="#000000"
            onPress={handleSaveEstimate}
          />
        </View>
        <OneButtonModal
          modalVisible={modalVisible}
          imageSource={require('../../../assets/images/check1.png')}
          mainText="견적서 전송 완료"
          sideText={
            "사용자가 '공방과 대화하기'를 선택해야 \n채팅을 할 수 있습니다.\n\n채팅이 가능하면 알려드리겠습니다."
          }
          buttonText="메인페이지로"
          buttonColor={'#ffffff'}
          buttonTextColor={'#000000'}
          onButtonPress={handleMainPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default SendEstimateScreen;