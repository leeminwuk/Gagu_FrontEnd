import React from 'react';
import {
  Modal,
  TouchableOpacity,
  Animated,
  KeyboardAvoidingView,
  Platform,
  Text,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Postcode from '@actbase/react-daum-postcode';
import CommonButton from '../../Button/CommonButton/CommonButton';
import SignupAccept from '../../Modal/SignupAccept/SignupAccept';
import BackButton from '../../Components/BackButton/BackButton';
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
import { usePlusAddressScreenLogic } from './events';

const PlusAddressScreen: React.FC = ({ navigation }) => {
  const {
    address,
    detailAddress,
    modalVisible,
    showNewInput,
    showDetailInput,
    signupModalVisible,
    slideAnim,
    shakeAnim,
    isValid,
    mainText,
    sideText,
    setModalVisible,
    handleAddressSelect,
    handleNext,
    handleSkip,
    setDetailAddress,
    setSignupModalVisible,
  } = usePlusAddressScreenLogic();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#191919' }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={{ flex: 1 }}>
        <BackButton
          navigation={navigation}
          titleText={''}
          image={0}
          onHamburgerPress={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
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
                  <AddressText>{address || '주소를 입력해주세요'}</AddressText>
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
                }}>
                <Animated.View
                  style={{
                    transform: [{ translateX: shakeAnim }],
                  }}>
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
          onRequestClose={() => setModalVisible(false)}>
          <SafeAreaProvider>
            <ModalSafeArea>
              <Postcode
                style={{ width: '100%', height: '100%' }}
                jsOptions={{ animation: true, theme: {} }}
                onSelected={handleAddressSelect}
                onError={function (error: unknown): void {
                  throw new Error('Function not implemented.');
                }}
              />
            </ModalSafeArea>
          </SafeAreaProvider>
        </Modal>
        <Modal
          visible={signupModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setSignupModalVisible(false)}>
          <SignupAccept
            setModalVisible={setSignupModalVisible}
            mainText="환영합니다!"
            sideText={
              '성공적으로 가입완료 되었습니다.\n원하는 가구를 제작하러 가볼까요?'
            }
            navigationTo="BottomTabNavigator"
          />
        </Modal>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default PlusAddressScreen;