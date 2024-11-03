import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './Styles';

const WorkShop = ({
  workshopId, 
  titleText,
  subText,
  locationText,
  reviewText,
  workshopimage,
  handleButtonPress,
  costText,
  starAverage, 
}) => {
  const handlePress = () => {
    handleButtonPress(workshopId); 
  };

  const validStarAverage = starAverage !== undefined && starAverage !== null ? starAverage : 0;
  const starCount = Math.ceil(validStarAverage);

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
      <View style={styles.workShopContainer}>
        <View style={styles.imageContainer}>
          <Image source={workshopimage} style={styles.image} />
        </View>
        <View style={styles.conatiner}>
          <View style={styles.titleContainer}>
            <View style={styles.titleTextContainer}>
              <Text style={styles.titleText}>{titleText}</Text>
            </View>
            <View style={styles.locationContainer}>
              <View style={styles.locationImageContainer}>
                <Image
                  source={require('../../assets/images/whitelocation.png')}
                  style={styles.locationImage}
                />
              </View>
              <View style={styles.locationTextContainer}>
                <Text style={styles.locationText}>{locationText}</Text>
              </View>
            </View>
          </View>
          <View style={styles.subTextContainer}>
            <Text style={styles.subText}>{subText}</Text>
          </View>
          <View style={styles.reviewContainer}>
            <View style={styles.starImageContainer}>
              {[...Array(starCount)].map((_, i) => (
                <Image
                  key={i}
                  source={require('../../assets/images/filedstar.png')}
                  style={styles.starImage}
                />
              ))}
            </View>
            <View style={styles.reviewTextContainer}>
              <Text style={styles.reviewText}>{reviewText}</Text>
            </View>
          </View>
          <View style={styles.expactedCostContainer}>
              <View style={styles.expactedTextContainer}>
                  <Text style={styles.expactedText}>
                      예상 가격
                  </Text>
              </View>
              <View style={styles.costContainer}>
                  <Text style={styles.costText}>
                      {costText}
                  </Text>
              </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WorkShop;