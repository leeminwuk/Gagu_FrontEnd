import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './Styles';

const StorageFuniture = ({ imageSource, furnitureText, date, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.storageImageContainer}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View style={styles.miniTextContainer}>
        <Text style={styles.furnitureText}>{furnitureText}</Text>
      </View>
      <View style={styles.dateTextContainer}>
        <Text style={styles.dateText}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default StorageFuniture;