import React from 'react';
import {
  Text,
  Modal,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { BlurView } from '@react-native-community/blur';
import {
  BlurContainer,
  ModalContainer,
  TitleContainer,
  CheckContainer,
  CheckImage,
  MainTextContainer,
  MainText,
  SideTextContainer,
  SideText,
  ButtonBox,
  ButtonContainer,
} from './Styles';
import CommonButton from '../Button/CommonButton/CommonButton';

const CommonModal = ({
  modalVisible,
  imageSource,
  mainText,
  sideText,
  firstButtonText,
  secondButtonText,
  firstButtonColor,
  secondButtonColor,
  firstButtonTextColor,
  secondButtonTextColor,
  onFirstButtonPress,
  onSecondButtonPress,
  setModalVisible,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <BlurView
        style={{ flex: 1 }}
        blurType="dark"
        blurAmount={10}
        reducedTransparencyFallbackColor="rgba(99,99,99,0.08)"
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <BlurContainer>
            <TouchableWithoutFeedback onPress={e => e.stopPropagation()}>
              <ModalContainer>
                <TitleContainer>
                  <CheckContainer>
                    <CheckImage source={imageSource} />
                  </CheckContainer>
                  <MainTextContainer>
                    <MainText>{mainText}</MainText>
                  </MainTextContainer>
                </TitleContainer>
                <SideTextContainer>
                  <SideText>{sideText}</SideText>
                </SideTextContainer>
                <ButtonContainer>
                  <ButtonBox>
                    <CommonButton
                      buttonText={firstButtonText}
                      buttonColor={firstButtonColor}
                      textColor={firstButtonTextColor}
                      onPress={onFirstButtonPress}
                    />
                  </ButtonBox>
                  <ButtonBox>
                    <CommonButton
                      buttonText={secondButtonText}
                      buttonColor={secondButtonColor}
                      textColor={secondButtonTextColor}
                      onPress={onSecondButtonPress}
                    />
                  </ButtonBox>
                </ButtonContainer>
              </ModalContainer>
            </TouchableWithoutFeedback>
          </BlurContainer>
        </TouchableWithoutFeedback>
      </BlurView>
    </Modal>
  );
};

export default CommonModal;