import React from 'react';
import useUserInfo from '../../hocks/useUserInfo';
import {
  Container,
  LogoContainer,
  MiniLogo,
  ProfileContainer,
  NicknameText,
  ProfileCircle,
  ProfileImage,
} from './Styles';

const MainHeader = () => {
  const { profileUrl, nickname } = useUserInfo();

  return (
    <Container>
      <LogoContainer>
        <MiniLogo
          source={require('../../assets/images/miniLogo.png')}
        />
      </LogoContainer>
      <ProfileContainer>
        <NicknameText>{nickname} 님</NicknameText>
        <ProfileCircle>
          <ProfileImage
            source={profileUrl ? { uri: profileUrl } : require('../../assets/images/profile.png')}
          />
        </ProfileCircle>
      </ProfileContainer>
    </Container>
  );
};

export default MainHeader;