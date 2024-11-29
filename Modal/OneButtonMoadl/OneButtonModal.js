import React from 'react';
import { Text, Modal, Image, TouchableOpacity } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import {
  BlurContainer,
  ModalContainer,
  CheckContainer,
  CheckImage,
  MainTextContainer,
  MainText,
  SideTextContainer,
  SideText,
  ButtonBox,
  ButtonContainer,
  OneButton,
  ButtonText,
} from './Styles';

const OneButtonModal = ({
  modalVisible,
  imageSource,
  mainText,
  sideText,
  buttonText,
  buttonColor,
  buttonTextColor,
  onButtonPress,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      alignItems="center"
      justifyContent="center"
    >
      <BlurView
        style={{ flex: 1 }}
        blurType="dark"
        blurAmount={10}
        reducedTransparencyFallbackColor="rgba(99,99,99,0.08)"
      >
        <BlurContainer>
          <ModalContainer>
            <CheckContainer>
              <CheckImage source={imageSource} />
              <MainTextContainer>
                <MainText>{mainText}</MainText>
              </MainTextContainer>
            </CheckContainer>
            <SideTextContainer>
              <SideText>{sideText}</SideText>
            </SideTextContainer>
            <ButtonBox>
              <ButtonContainer>
                <OneButton
                  onPress={onButtonPress}
                  style={{ backgroundColor: buttonColor }}
                  activeOpacity={0.8}
                >
                  <ButtonText style={{ color: buttonTextColor }}>
                    {buttonText}
                  </ButtonText>
                </OneButton>
              </ButtonContainer>
            </ButtonBox>
          </ModalContainer>
        </BlurContainer>
      </BlurView>
    </Modal>
  );
};

export default OneButtonModal;