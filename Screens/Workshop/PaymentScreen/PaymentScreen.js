import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  TextInput,
  SafeAreaView,
  Alert,
} from 'react-native';
import styles from './Styles';
import BackButton from '../../../Components/BackButton/BackButton';
import CommonButton from '../../../Button/CommonButton';
import CommonModal from '../../../Modal/CommonModal';
import { saveEstimate } from '../../../api/estimateSave';

const PaymentScreen = ({ navigation, route }) => {
  const mainText = '결제 요청';
  const sideText = '의뢰자와 상담 후 최종 금액을 입력해주세요.\n입력한 금액은 수정이 불가능하니 유의해주세요!';
  const { itemId } = route.params || {};

  useEffect(() => {
    if (!itemId) {
      Alert.alert('오류', '아이템 ID가 없습니다.');
      navigation.goBack();
    }
  }, [itemId, navigation]);

  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [priceError, setPriceError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const priceShakeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    return () => {
      priceShakeAnimation.stopAnimation();
    };
  }, [priceShakeAnimation]);

  const handleMainPress = async () => {
    try {
      const response = await saveEstimate(itemId, price, description);
      console.log('Save estimate response:', response);
      setModalVisible(false);
      navigation.navigate('ChatScreen');
    } catch (error) {
      Alert.alert('오류', '견적서 저장 중 오류가 발생했습니다.');
    }
  };

  const handleSaveEstimate = () => {
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
    }

    if (hasError) {
      return;
    }

    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <BackButton navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.title}>{mainText}</Text>
        <Text style={styles.subtitle}>{sideText}</Text>
        <View style={styles.contentContainer}>
          <View style={styles.estimateTitle}>
            <Image
              source={require('../../../assets/images/moneyicon.png')}
              style={styles.titleIcon}
            />
            <View style={styles.estimateTextContainer}>
              <Text style={styles.estimateText}>최종 결제 요청</Text>
            </View>
          </View>
          <Animated.View
            style={[
              styles.estimateContainer,
              { transform: [{ translateX: priceShakeAnimation }] },
            ]}>
            <View
              style={[
                styles.estimateInputContainer,
                priceError && styles.errorBorder,
              ]}>
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
                  const numericText = text.replace(/[^0-9]/g, '');
                  setPrice(numericText);
                  setPriceError(false);
                }}
                keyboardType="numeric"
              />
            </View>
          </Animated.View>
          <View style={styles.descriptionTitle}>
            <Image
              source={require('../../../assets/images/opinionicon.png')}
              style={styles.descriptionIcon}
            />
            <Text style={styles.estimateText}>가구 견적 설명</Text>
            </View>
          <View style={[styles.descriptionInputContainer, descriptionError && styles.errorBorder]}>
            <TextInput
              style={[styles.descriptionInput, styles.multilineInput]}
              placeholder="가구 제작에 대한 의견을 남겨주세요."
              placeholderTextColor={descriptionError ? '#FF9696' : '#ffffff'}
              value={description}
              onChangeText={(text) => {
                setDescription(text);
                setDescriptionError(false);
              }}
              multiline
            />
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <CommonButton
          buttonText="결제 요청"
          buttonColor="#ffffff"
          textColor="#000000"
          onPress={handleSaveEstimate}
        />
      </View>
      <CommonModal
        modalVisible={modalVisible}
        imageSource={require('../../../assets/images/warning.png')}
        mainText="확인 필요"
        sideText={`입력하신 금액은 '${price}원' 입니다.\n입력하신 금액은 수정이 불가능하니 유의해주세요!`}
        firstButtonColor={'#ffffff'}
        firstButtonTextColor={'#000000'}
        firstButtonText={'결제 요청'}
        secondButtonColor={'rgba(143, 143, 143, 0.20)'}
        secondButtonTextColor={'#ffffff'}
        secondButtonText={'금액 수정'}
        onFirstButtonPress={handleMainPress}
        onSecondButtonPress={() => setModalVisible(false)}
      />
    </SafeAreaView>
  );
};

export default PaymentScreen;