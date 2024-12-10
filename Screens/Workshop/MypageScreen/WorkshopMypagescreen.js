import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Alert,
  ImageBackground,
} from 'react-native';
import styles from './Styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import MypageHeader from '../../../Components/WorkshopBackHeader/MypageHeader';
import {useNavigation} from '@react-navigation/native';
import {UserInfo} from '../../../api/userInfo';
import {getToken} from '../../../utils/storage';
import MypageButton from '../../../Button/MypageButton/MypageButton';
import CommonButton from '../../../Button/CommonButton/CommonButton';
import WorkshopHeader from '../../../Components/MainHeader/WorkshopHeader';

const WorkshopMypageScreen = () => {
  const navigation = useNavigation();
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = await getToken();
        if (token) {
          const userInfo = await UserInfo(token.replace('Bearer ', ''));
          if (userInfo && userInfo.name) {
            setNickname(userInfo.name);
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
    <SafeAreaView style={{flex: 1, backgroundColor: '#191919'}}>
      <WorkshopHeader />
      <View style={styles.container}>
        <View style={styles.workshopImage}>
          <ImageBackground
            source={require('../../../assets/images/workshopBack.png')}
            style={styles.workshopIcon}>
            <Text style={styles.workshopName}>{nickname}</Text>
          </ImageBackground>
        </View>
        <View style={styles.buttonContainer}>
          <MypageButton
            image={require('../../../assets/images/profile.png')}
            text="공방 정보 수정"
          />
          <MypageButton
            image={require('../../../assets/images/pencil.png')}
            text="공방 후기 관리"
          />
          <MypageButton
            image={require('../../../assets/images/miniLogo.png')}
            text="APP 설정"
            imagecontainerStyle={styles.logoContainer}
            imageStyle={styles.logoStyle}
          />
        </View>
        <View style={styles.buttonBox}>
          <CommonButton
            buttonText="로그아웃"
            buttonColor="#ffffff"
            textColor="#000000"
            onPress={handleLogoutPress}
          />
          <CommonButton buttonText="가구 탈퇴하기" textColor="#585858" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WorkshopMypageScreen;
