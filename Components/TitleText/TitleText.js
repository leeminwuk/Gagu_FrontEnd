import React from 'react';
import {View, Text} from 'react-native';
import styles from './Styles';

const TitleText = ({mainText, sideText}) => {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.mainTextBox}>
        <Text style={styles.titleText}>{mainText}</Text>
      </View>
      <View style={styles.sideTextBox}>
        <Text style={styles.sideText}>{sideText}</Text>
      </View>
    </View>
  );
};
export default TitleText;
