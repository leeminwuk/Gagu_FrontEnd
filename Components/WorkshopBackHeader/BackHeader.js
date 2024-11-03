import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { UserInfo } from '../../api/userInfo';
import { getToken } from '../../utils/storage';
import styles from './Styles';

const BackHeader = ({ navigation, titleText }) => {
  const handlerBack = () => {
    navigation.goBack();
  };

  const [nickname, setNickname] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = await getToken();
        if (token) {
          const userInfo = await UserInfo(token.replace('Bearer ', ''));
          if (userInfo && userInfo.name) {
            setNickname(userInfo.name);
            if (userInfo.profileUrl) {
              setProfileImage({ uri: userInfo.profileUrl });
            }
          } else {
            Alert.alert('오류', '사용자 정보를 가져오는데 실패했습니다.');
          }
        } else {
          Alert.alert('오류', '토큰을 찾을 수 없습니다.');
        }
      } catch (error) {
        Alert.alert('오류', '사용자 정보를 가져오는데 실패했습니다.');
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.backbuttonContainer}>
        <TouchableOpacity onPress={handlerBack} activeOpacity={0.8}>
          <Image
            source={require('../../assets/images/backButton.png')}
            style={styles.backButton}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{titleText}</Text>
        </View>
      </View>
      <View style={styles.workshopTitle}>
      <View style={styles.profileContainer}>
        <Text style={styles.nicknameText}>{nickname} 님</Text>
          <Image
            source={profileImage}
            style={styles.profileImage}
          />
      </View>
      </View>
    </View>
  );
};

export default BackHeader;