import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './Styles';

const RequestButton = ({onPress, requestText, requestImage}) => {
  return (
    <TouchableOpacity
      style={styles.requestButton}
      onPress={onPress}
      activeOpacity={0.8}>
      <View>
        <Image
          source={requestImage}
          style={styles.requestImage}
        />
      </View>
      <Text style={styles.requestButtonText}>{requestText}</Text>
    </TouchableOpacity>
  );
};

export default RequestButton;
