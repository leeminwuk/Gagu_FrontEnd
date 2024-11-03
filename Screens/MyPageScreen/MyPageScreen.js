import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Styles';
import MainHeader from '../../Components/MainHeader/MainHeader';
import { useNavigation } from '@react-navigation/native';
import CommonButton from '../../Button/CommonButton';
import logOut from '../../api/logOut';
import MypageButton from '../../Button/MypageButton/MypageButton';
import { getToken } from '../../utils/storage';
import { UserInfo } from '../../api/userInfo';

const MyPageScreen = () => {
  const [profileUrl, setProfileUrl] = useState('');
  const [nickname, setNickname] = useState(''); 
  const [email, setEmail] = useState('');
  const [loginTypeLogo, setLoginTypeLogo] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = await getToken();
        const userInfo = await UserInfo(token);
        setProfileUrl(userInfo.profileUrl);
        setNickname(userInfo.nickname); 
        setEmail(userInfo.email);
        setLoginTypeLogo(userInfo.loginTypeLogo);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, []);

  const onPressEditInformation = () => {
    navigation.navigate('EditInformationScreen');
  };

  const handleLogoutPress = async () => {
    try {
      const token = await getToken();
      const result = await logOut(token);
      if (result.success) {
        console.log(result.message);
        navigation.navigate('LoginScreen');
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error('로그아웃 중 오류 발생:', error);
    }
  };

  return (
    <View style={styles.mypageContainer}>
      <MainHeader />
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image
            source={
              profileUrl
                ? { uri: profileUrl }
                : require('../../assets/images/profile.png')
            }
            style={styles.profileImage}
          />
        </View>
        <View style={styles.profileDetailContainer}>
          <Text style={styles.profileText}>{nickname} 님</Text> 
          <View style={styles.userEmailContainer}>
            {loginTypeLogo && (
              <Image source={{ uri: loginTypeLogo }} style={styles.logoImage} />
            )}
            <Text style={styles.emailText}>{email}</Text>
          </View>
        </View>
        <View style={styles.barButtonContainer}>
          <MypageButton
            image={require('../../assets/images/profile.png')}
            text="개인정보 수정"
            onPress={onPressEditInformation}
          />
          <MypageButton
            image={require('../../assets/images/miniLogo.png')}
            text="APP 설정"
            imagecontainerStyle={styles.logoContainer}
            imageStyle={styles.logoStyle}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CommonButton
            buttonText="로그아웃"
            buttonColor="#ffffff"
            textColor="#000000"
            onPress={handleLogoutPress}
          />
          <CommonButton buttonText="가구 탈퇴하기" textColor="#585858" />
        </View>
      </View>
    </View>
  );
};

export default MyPageScreen;