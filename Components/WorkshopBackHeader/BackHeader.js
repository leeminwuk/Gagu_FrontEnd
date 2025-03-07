import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { UserInfo } from '../../api/userInfo';
import { getToken } from '../../utils/storage';
import {
  Container,
  BackButtonContainer,
  BackButton,
  TitleContainer,
  TitleText,
  ProfileContainer,
  NicknameText,
  ProfileImage,
  BackButtonImage,
} from './Styles';

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
    <Container>
      <BackButtonContainer>
        <BackButton onPress={handlerBack} activeOpacity={0.8}>
          <BackButtonImage
            source={require('../../assets/images/backButton.png')}/>
        </BackButton>
        <TitleContainer>
          <TitleText>{titleText}</TitleText>
        </TitleContainer>
      </BackButtonContainer>
      <ProfileContainer>
        <NicknameText>{nickname} 님</NicknameText>
        <ProfileImage
          source={profileImage}
        />
      </ProfileContainer>
    </Container>
  );
};

export default BackHeader;