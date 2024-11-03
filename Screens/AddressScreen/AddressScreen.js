import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Animated,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from './Styles';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import BackButton from '../../Components/BackButton/BackButton';
import Postcode from '@actbase/react-daum-postcode';
import {TextInput} from 'react-native-gesture-handler';
import CommonButton from '../../Button/CommonButton';
import SignupAccept from '../../Modal/SignupAccept/SignupAccept'; // SignupAccept 컴포넌트 임포트
import { postAddress } from '../../api/addressInput'; // postAddress 함수 임포트
import { getToken } from '../../utils/storage'; // 토큰 가져오는 함수 임포트

const AddressScreen = ({navigation, onAddressSubmit}) => {
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState(''); // 상세 주소 상태 변수 추가
  const [modalVisible, setModalVisible] = useState(false);
  const [showNewInput, setShowNewInput] = useState(false);
  const [showDetailInput, setShowDetailInput] = useState(false);
  const [signupModalVisible, setSignupModalVisible] = useState(false); // SignupAccept 모달 상태 추가
  const slideAnim = useRef(new Animated.Value(0)).current;
  const shakeAnim = useRef(new Animated.Value(0)).current; // 흔들림 애니메이션 상태 변수 추가
  const [isValid, setIsValid] = useState(true);
  const theme = {
    bgColor: "#191919", // 바탕 배경색
    searchBgColor: "#333333", // 검색창 배경색
    contentBgColor: "#444444", // 본문 배경색
    pageBgColor: "#555555", // 페이지 배경색
    textColor: "#FFFFFF", // 기본 글자색
    queryTextColor: "#FFFFFF", // 검색창 글자색
    postcodeTextColor: "#FFFFFF", // 우편번호 글자색
    emphTextColor: "#FFFFFF", // 강조 글자색
    outlineColor: "#FFFFFF" // 테두리 색상
  };
  const mainText = showDetailInput
    ? '상세주소를 입력해주세요'
    : '마지막으로,\n집 주소를 입력해주세요';
  const sideText = showDetailInput
    ? ''
    : '가구를 배송받을 실제 주소가 필요해요.\n언제든지 마이페이지에서 수정가능해요';

  const handleAddressSelect = data => {
    setAddress(data.address);
    setModalVisible(false);
    setShowNewInput(true);
    setShowDetailInput(true);
  };

  useEffect(() => {
    if (showNewInput) {
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [showNewInput]);

  const handleNext = async () => {
    if (!address || !detailAddress) {
      setIsValid(false); // 유효하지 않은 경우 빨간색 테두리로 변경
      Animated.sequence([
        Animated.timing(shakeAnim, {
          toValue: 10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: -10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: 10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: 0,
          duration: 50,
          useNativeDriver: true,
        }),
      ]).start();
      return;
    }
    setIsValid(true); // 유효한 경우
    console.log('주소:', address);
    console.log('상세주소:', detailAddress);

    try {
      const token = await getToken();
      const response = await postAddress(token, `${address} ${detailAddress}`);
      console.log('서버 응답:', response);
    } catch (error) {
      console.error('주소 전송 중 오류 발생:', error);
    }

    setSignupModalVisible(true); // SignupAccept 모달 표시
  };

  const handleSkip = () => {
    setAddress('');
    setDetailAddress('');
    console.log('다음에 입력');
    //onAddressSubmit({ address: '', detailAddress: '' });
    setSignupModalVisible(true);
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: '#191919'}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={{flex: 1}}>
        <BackButton navigation={navigation} />
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>{mainText}</Text>
          </View>
          {sideText ? (
            <View style={styles.sideTextBox}>
              <Text style={styles.sideText}>{sideText}</Text>
            </View>
          ) : null}
          <View style={styles.addressContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.hintText}>주소입력</Text>
              <View style={styles.textInputContainer}>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <Text style={styles.addressText}>
                    {address || '주소를 입력해주세요'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {showNewInput && (
              <Animated.View
                style={{
                  transform: [
                    {
                      translateY: slideAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [50, 0],
                      }),
                    },
                  ],
                  opacity: slideAnim,
                }}>
                <Animated.View
                  style={{
                    transform: [{translateX: shakeAnim}],
                  }}>
                  <View style={styles.inputContainer}>
                    <Text style={styles.hintText}>상세주소</Text>
                    <View
                      style={[
                        styles.textInputContainer,
                        !isValid && styles.invalidInput,
                      ]}>
                      <TextInput
                        style={styles.addressText}
                        placeholder="상세주소를 입력해주세요"
                        placeholderTextColor="#ffffff"
                        onChangeText={text => {
                          setDetailAddress(text);
                          setIsValid(true); // 입력 중에는 유효성 검사를 하지 않음
                        }}
                      ></TextInput>
                    </View>
                  </View>
                </Animated.View>
              </Animated.View>
            )}
          </View>
          <View style={styles.buttonContainer}>
            {showDetailInput && (
              <CommonButton
                buttonText="다음"
                buttonColor="#ffffff"
                textColor="#000000"
                onPress={handleNext}
              />
            )}
            <CommonButton
              buttonText="나중에 입력할래요"
              textColor="#878787"
              onPress={handleSkip}
            />
          </View>
        </View>
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}>
          <SafeAreaProvider>
            <SafeAreaView style={styles.modalSafeArea}>
              <Postcode
                style={{width: '100%', height: '100%'}}
                jsOptions={{animation: true, theme}}
                onSelected={handleAddressSelect}
              />
            </SafeAreaView>
          </SafeAreaProvider>
        </Modal>
        <Modal
          visible={signupModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setSignupModalVisible(false)}>
          <SignupAccept
            setModalVisible={setSignupModalVisible} // 여기서 setModalVisible을 setSignupModalVisible로 변경
            mainText="환영합니다!"
            sideText={"성공적으로 가입완료 되었습니다.\n원하는 가구를 제작하러 가볼까요?"}
            navigationTo="BottomTabNavigator"
          />
        </Modal>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default AddressScreen;