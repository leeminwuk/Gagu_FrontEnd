import React from 'react';
import {View, Text, Modal, Image, TouchableOpacity} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import styles from './Styles';

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
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        blurType="dark"
        blurAmount={1}
        reducedTransparencyFallbackColor="rgba(99,99,99,0.08)">
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <View style={styles.checkContainer}>
              <Image source={imageSource} style={styles.checkImage} />
              <View style={styles.mainTextContainer}>
                <Text style={styles.mainText}>{mainText}</Text>
              </View>
            </View>
            <View>
              <View style={styles.sideTextContainer}>
                <Text style={styles.sideText}>{sideText}</Text>
              </View>
            </View>
            <View style={styles.buttonBox}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={onButtonPress}
                  style={[
                    styles.oneButton,
                    {backgroundColor: buttonColor},
                  ]}
                  activeOpacity={0.8}
                  >
                  <Text
                    style={[styles.buttonText, {color: buttonTextColor}]}>
                    {buttonText}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
};

export default OneButtonModal;