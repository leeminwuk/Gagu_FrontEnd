import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Styles';

const title = ({nameText, locationText, costText}) => {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.leftContainer}>
      <View style={styles.namelocationContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{nameText}</Text>
        </View>
        <View style={styles.locationContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../../assets/images/whitelocation.png')}
              style={styles.locationimage}
            />
          </View>
          <View style={styles.locationTextContainer}>
            <Text style={styles.locationText}>{locationText}</Text>
          </View>
        </View>
        </View>
        <View style={styles.authContainer}>
          <Image
            source={require('../../../assets/images/auth.png')}
            style={styles.authimage}
          />
        </View>
      </View>
      <View style={styles.expactedcostContainer}>
        <View style={styles.expactedContainer}>
          <Text style={styles.expactedText}>예상 가격</Text>
        </View>
        <View style={styles.costContainer}>
          <Text style={styles.costText}>{costText}</Text>
        </View>
      </View>
      </View>
  );
};
export default title;
