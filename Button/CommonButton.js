import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Styles';

const CommonButton = ({navigation, buttonText, buttonColor, textColor, onPress}) => {
  return (
    <View style={styles.buttonContainer}>
        <TouchableOpacity 
            style={[styles.button, {backgroundColor: buttonColor}]}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Text style={[styles.buttonText, {color: textColor}]}>{buttonText}</Text>
        </TouchableOpacity>
    </View>
  );
};

export default CommonButton;