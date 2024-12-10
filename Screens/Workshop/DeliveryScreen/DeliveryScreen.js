import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, Animated, TouchableOpacity, FlatList, TextInput, SafeAreaView } from 'react-native';
import styles from './Styles';
import BackButton from '../../../Components/BackButton/BackButton';
import TitleText from '../../../Components/TitleText/TitleText';
import CommonButton from '../../../Button/CommonButton/CommonButton';
import CommonModal from '../../../Modal/CommonModal';

const DeliveryScreen = ({ navigation }) => {
  const mainText = '배달(운송장 번호 입력)';
  const sideText = '택배 업체에서 받은 운송장 번호를 입력해주세요.\n만약 직접 배달, 픽업인 경우 이 단계는 넘어가도 좋아요! ';

  const couriers = [
    'CJ대한통운', '한진택배', '롯데택배', '우체국택배', '로젠택배', 
    'KG로지스', 'CU편의점택배', 'GS25편의점택배', '홈픽택배', '일양로지스', 
    'SLX택배', '대신택배', '경동택배', '합동택배', '건영택배'
  ];
  
  const [selectedCourier, setSelectedCourier] = useState('');
  const [courierError, setCourierError] = useState(false);
  const [isListVisible, setIsListVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingNumberError, setTrackingNumberError] = useState(false);

  const courierShakeAnimation = useRef(new Animated.Value(0)).current;
  const rotateAnimation = useRef(new Animated.Value(0)).current;
  const trackingNumberShakeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(rotateAnimation, {
      toValue: isListVisible ? 1 : 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
  }, [isListVisible]);

  const handleMainPress = () => {
    setModalVisible(false);
    navigation.navigate('WorkshopChatting', { showPaymentRequest: true });
  };

  const handleSaveEstimate = () => {
    let hasError = false;

    if (!selectedCourier) {
      setCourierError(true);
      hasError = true;
      Animated.sequence([
        Animated.timing(courierShakeAnimation, {
          toValue: 10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(courierShakeAnimation, {
          toValue: -10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(courierShakeAnimation, {
          toValue: 10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(courierShakeAnimation, {
          toValue: 0,
          duration: 50,
          useNativeDriver: true,
        }),
      ]).start();
    }

    if (!trackingNumber) {
      setTrackingNumberError(true);
      hasError = true;
      Animated.sequence([
        Animated.timing(trackingNumberShakeAnimation, {
          toValue: 10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(trackingNumberShakeAnimation, {
          toValue: -10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(trackingNumberShakeAnimation, {
          toValue: 10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(trackingNumberShakeAnimation, {
          toValue: 0,
          duration: 50,
          useNativeDriver: true,
        }),
      ]).start();
    }

    if (hasError) {
      return;
    }

    setModalVisible(true);
  };

  const handleSelectCourier = (courier) => {
    setSelectedCourier(courier);
    setCourierError(false);
    setIsListVisible(false);
  };

  const rotateInterpolate = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const rotateStyle = {
    transform: [{ rotate: rotateInterpolate }],
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
              { transform: [{ translateX: courierShakeAnimation }] },
            ]}
          >
            <View style={styles.estimateTitle}>
              <Image
                source={require('../../../assets/images/couriericon.png')}
                style={styles.titleIcon}
              />
              <View style={styles.estimateTextContainer}>
                <Text style={styles.estimateText}>택배사 선택</Text>
              </View>
            </View>
            <View
              style={[
                styles.estimateInputContainer,
                courierError && styles.errorBorder,
              ]}
            >
              <TouchableOpacity onPress={() => setIsListVisible(!isListVisible)} activeOpacity={1}>
                <View style={styles.selectContainer}>
                  <Text style={styles.selectText}>
                    {selectedCourier || '택배사를 선택하세요'}
                  </Text>
                  <Animated.Image
                    source={require('../../../assets/images/whiteslideicon.png')}
                    style={[styles.slideImage, rotateStyle]}
                  />
                </View>
              </TouchableOpacity>
              {isListVisible && (
                <FlatList
                  data={couriers}
                  keyExtractor={item => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleSelectCourier(item)} style={styles.listItem}>
                      <Text style={styles.selectText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                  style={styles.listContainer} 
                />
              )}
            </View>
          </Animated.View>
          <Animated.View
            style={[
              styles.estimateContainer,
              { transform: [{ translateX: trackingNumberShakeAnimation }] },
            ]}
          >
            <View style={styles.estimateTitle}>
              <Image
                source={require('../../../assets/images/whitedeliveryicon.png')}
                style={styles.titleIcon}
              />
              <View style={styles.estimateTextContainer}>
                <Text style={styles.estimateText}>운송장 번호 입력</Text>
              </View>
            </View>
            <View
              style={[
                styles.estimateInputContainer,
                trackingNumberError && styles.errorBorder,
              ]}
            >
              <TextInput
                style={styles.estimateInput}
                placeholder="운송장 번호를 입력해주세요."
                placeholderTextColor={trackingNumberError ? '#FF9696' : '#ffffff'}
                value={trackingNumber}
                onChangeText={text => {
                  setTrackingNumber(text);
                  setTrackingNumberError(false);
                }}
              />
            </View>
          </Animated.View>
        </View>
        <View style={styles.buttonContainer}>
          <CommonButton
            buttonText="완료"
            buttonColor="#ffffff"
            textColor="#000000"
            onPress={handleSaveEstimate}
          />
        </View>
        <CommonModal
          modalVisible={modalVisible}
          imageSource={require('../../../assets/images/warning.png')}
          mainText="확인 필요"
          sideText={
            `선택하신 택배사는 '${selectedCourier}' 입니다.\n선택하신 택배사는 수정이 불가능하니 유의해주세요!`
          }
          firstButtonColor={'#ffffff'}
          firstButtonTextColor={'#000000'}
          firstButtonText={'결제 요청'}
          secondButtonColor={'rgba(143, 143, 143, 0.20)'}
          secondButtonTextColor={'#ffffff'}
          secondButtonText={'택배사 수정'}
          onFirstButtonPress={handleMainPress}
          onSecondButtonPress={() => setModalVisible(false)}
        />
      </View>
    </SafeAreaView>
  );
};

export default DeliveryScreen;