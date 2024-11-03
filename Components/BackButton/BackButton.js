import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './Styles';

const BackButton = ({ navigation, titleText, image, onHamburgerPress, steps = 1 }) => {
  const handlerBack = () => {
    navigation.pop(steps);
  };

  return (
    <View style={styles.container}>
      <View style={styles.backbuttonContainer}>
        <TouchableOpacity onPress={handlerBack} activeOpacity={0.8}>
          <Image
            source={require('../../assets/images/backButton.png')}
            style={styles.backButton}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{titleText}</Text>
      </View>
      <TouchableOpacity
        style={styles.hamburgerbarContainer}
        activeOpacity={0.8}
        onPress={onHamburgerPress}
      >
        <Image source={image} style={styles.hamburgerbar} />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;