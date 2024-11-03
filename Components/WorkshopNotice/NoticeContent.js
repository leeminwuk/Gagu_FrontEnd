import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Styles';

const NoticeContent = ({ imageSource, mainText, subText }) => {
  return (
    <View style={styles.noticeContainer}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.noticeMainText}>{mainText}</Text>
        <Text style={styles.noticeSubText}>{subText}</Text>
      </View>
    </View>
  );
};

export default NoticeContent;