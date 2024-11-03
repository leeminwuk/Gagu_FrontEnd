import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Styles';
import useUserInfo from '../../hocks/useUserInfo';

const MainHeader = () => {
  const { profileUrl, nickname } = useUserInfo();

  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <View>
          <Image
            source={require('../../assets/images/miniLogo.png')}
            style={styles.miniLogo}
          />
        </View>
      </View>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.nicknameText}>{nickname} 님</Text>
        </View>
        <View style={styles.profileCircle}>
          <Image
            source={profileUrl ? { uri: profileUrl } : require('../../assets/images/profile.png')}
            style={styles.profileImage}
          />
        </View>
      </View>
    </View>
  );
};

export default MainHeader;