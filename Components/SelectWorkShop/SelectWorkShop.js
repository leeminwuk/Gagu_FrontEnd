import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './Styles';

const SelectWorkShop = ({
  workshopName,
  workshopLocation,
  onCheckEstimate,
  onChatWithWorkshop,
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/longworkshop.png')}
        style={styles.image}>
        <View style={styles.overlay}>
          <View style={styles.header}>
            <Text style={styles.workshopName}>{workshopName}</Text>
            <Text style={styles.workshopLocation}>{workshopLocation}</Text>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.button}
              onPress={onCheckEstimate}
              activeOpacity={0.8}>
              <Text style={styles.buttonText}>견적서 확인</Text>
                <Image
                  source={require('../../assets/images/estimate.png')}
                  style={styles.icon}
                />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={onChatWithWorkshop}
              activeOpacity={0.8}>
              <Text style={styles.buttonText}>공방과 대화</Text>
              <Image
                  source={require('../../assets/images/chat.png')}
                  style={styles.icon}
                />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SelectWorkShop;
