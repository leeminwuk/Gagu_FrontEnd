import React from 'react';
import {
  View,
  Text,
  Modal,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import styles from './Styles';
import CommonButton from '../Button/CommonButton';

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
        style={styles.blurContainer}
        blurType="dark"
        blurAmount={10}
        reducedTransparencyFallbackColor="rgba(99,99,99,0.08)">
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modal}>
            <TouchableWithoutFeedback onPress={e => e.stopPropagation()}>
              <View style={styles.modalContainer}>
                <View style={styles.titleContainer}>
                  <View style={styles.checkContainer}>
                    <Image source={imageSource} style={styles.checkImage} />
                  </View>
                  <View style={styles.mainTextContainer}>
                    <Text style={styles.mainText}>{mainText}</Text>
                  </View>
                </View>
                <View style={styles.sideTextContainer}>
                  <Text style={styles.sideText}>{sideText}</Text>
                </View>
                <View style={styles.buttonContainer}>
                  <View style={styles.buttonBox}>
                    <CommonButton
                      buttonText={firstButtonText}
                      buttonColor={firstButtonColor}
                      textColor={firstButtonTextColor}
                      onPress={onFirstButtonPress}
                    />
                  </View>
                  <View style={styles.buttonBox}>
                    <CommonButton
                      buttonText={secondButtonText}
                      buttonColor={secondButtonColor}
                      textColor={secondButtonTextColor}
                      onPress={onSecondButtonPress}
                    />
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </BlurView>
    </Modal>
  );
};

export default CommonModal;