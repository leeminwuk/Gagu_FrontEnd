import React, { useState, useRef, useEffect } from 'react';
import {
  Modal,
  TouchableOpacity,
  Animated,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Postcode from '@actbase/react-daum-postcode';
import CommonButton from '../../Button/CommonButton/CommonButton';
import SignupAccept from '../../Modal/SignupAccept/SignupAccept';
import { postAddress } from '../../api/addressInput';
import { getToken } from '../../utils/storage';
import {
  Container,
  TextContainer,
  TitleText,
  SideTextBox,
  SideText,
  AddressContainer,
  HintText,
  InputContainer,
  TextInputContainer,
  AddressText,
  ButtonContainer,
  InvalidInput,
  ModalSafeArea,
  TextInputStyled,
} from './Styles';
import BackButton from '../../Components/BackButton/BackButton';

const AddressScreen = ({ navigation, onAddressSubmit }) => {
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [showNewInput, setShowNewInput] = useState(false);
  const [showDetailInput, setShowDetailInput] = useState(false);
  const [signupModalVisible, setSignupModalVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const shakeAnim = useRef(new Animated.Value(0)).current;
  const [isValid, setIsValid] = useState(true);
  const theme = {
    bgColor: "#191919",
    searchBgColor: "#333333",
    contentBgColor: "#444444",
    pageBgColor: "#555555",
    textColor: "#FFFFFF",
    queryTextColor: "#FFFFFF",
    postcodeTextColor: "#FFFFFF",
    emphTextColor: "#FFFFFF",
    outlineColor: "#FFFFFF"
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
      setIsValid(false);
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
    setIsValid(true);
    console.log('주소:', address);
    console.log('상세주소:', detailAddress);

    try {
      const token = await getToken();
      const response = await postAddress(token, `${address} ${detailAddress}`);
      console.log('서버 응답:', response);
    } catch (error) {
      console.error('주소 전송 중 오류 발생:', error);
    }

    setSignupModalVisible(true);
  };

  const handleSkip = () => {
    setAddress('');
    setDetailAddress('');
    console.log('다음에 입력');
    setSignupModalVisible(true);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#191919' }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <BackButton navigation={navigation} />
        <Container>
          <TextContainer>
            <TitleText>{mainText}</TitleText>
          </TextContainer>
          {sideText ? (
            <SideTextBox>
              <SideText>{sideText}</SideText>
            </SideTextBox>
          ) : null}
          <AddressContainer>
            <InputContainer>
              <HintText>주소입력</HintText>
              <TextInputContainer>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <AddressText>
                    {address || '주소를 입력해주세요'}
                  </AddressText>
                </TouchableOpacity>
              </TextInputContainer>
            </InputContainer>
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
                }}
              >
                <Animated.View
                  style={{
                    transform: [{ translateX: shakeAnim }],
                  }}
                >
                  <InputContainer>
                    <HintText>상세주소</HintText>
                    <TextInputContainer style={!isValid && InvalidInput}>
                      <TextInputStyled
                        placeholder="상세주소를 입력해주세요"
                        placeholderTextColor="#ffffff"
                        onChangeText={text => {
                          setDetailAddress(text);
                          setIsValid(true);
                        }}
                        value={detailAddress}
                      />
                    </TextInputContainer>
                  </InputContainer>
                </Animated.View>
              </Animated.View>
            )}
          </AddressContainer>
          <ButtonContainer>
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
          </ButtonContainer>
        </Container>
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <SafeAreaProvider>
            <ModalSafeArea>
              <Postcode
                style={{ width: '100%', height: '100%' }}
                jsOptions={{ animation: true, theme }}
                onSelected={handleAddressSelect}
              />
            </ModalSafeArea>
          </SafeAreaProvider>
        </Modal>
        <Modal
          visible={signupModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setSignupModalVisible(false)}
        >
          <SignupAccept
            setModalVisible={setSignupModalVisible}
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