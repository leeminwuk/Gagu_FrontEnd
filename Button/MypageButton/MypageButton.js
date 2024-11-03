import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './Styles';

const MypageButton = ({ image, text, style, imagecontainerStyle, imageStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.7}
      onPress={onPress}
      >
      <View style={[styles.imageContainer, imagecontainerStyle]}>
        <Image
          source={image}
          style={[styles.image, imageStyle]}
        />
      </View>
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MypageButton;