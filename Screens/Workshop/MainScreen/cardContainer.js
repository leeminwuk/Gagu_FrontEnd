import React from 'react';
import { View, Image, ImageBackground, Text, TouchableOpacity } from 'react-native';
import styles from './Styles';

const CardContainer = ({ imageSource, iconSource, text, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.cardContainerWrapper}>
        <ImageBackground source={imageSource} style={styles.cardImage}>
          <View style={styles.imagetextContainer}>
            <Image source={iconSource} style={styles.iconImage} />
            <View style={styles.contentTextContainer}>
              <Text style={styles.contentText}>{text}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default CardContainer;

export const WideCardContainer = ({ imageSource, iconSource, text, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.produceImageWrapper}>
        <ImageBackground source={imageSource} style={styles.produceImage}>
          <View style={styles.imagetextContainer}>
            <Image source={iconSource} style={styles.chairsearchImage} />
            <View style={styles.contentTextContainer}>
              <Text style={styles.contentText}>{text}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};