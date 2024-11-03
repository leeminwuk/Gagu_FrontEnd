import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Styles';

const NearLocation = () => {
  const locations = [
    '서울특별시 송파구',
    '서울특별시 강남구',
    '서울특별시 중구',
  ];

  const [nearLocationText, setNearLocationText] = useState(locations[0]);

  return (
      <View style={styles.nearLocationContainer}>
        <View style={styles.locationImageContainer}>
          <Image
            source={require('../../assets/images/location.png')}
            style={styles.locationImage}
          />
        </View>
        <View style={styles.locationTextContainer}>
          <Text style={styles.nearLocationText}>{nearLocationText}</Text>
        </View>
      </View>
  );
};

export default NearLocation;
