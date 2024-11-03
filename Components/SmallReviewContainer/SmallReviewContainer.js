import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './Styles';

const SmallReviewContainer = ({ img1, description = '' }) => {
  return (
    <View style={styles.reviewContents}>
      <TouchableOpacity activeOpacity={0.8} style={styles.reviewBox}>
        <View style={styles.reviewimageContainer}>
          {img1}
        </View>
        <View style={styles.reviewtextContainer}>
          <Text style={styles.reviewText}>
            {`${description.substring(0, 35)}${description.length > 35 ? '...' : ''}`}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SmallReviewContainer;