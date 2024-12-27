import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  padding-horizontal: 20px;
  padding-vertical: 20px;
  background-color: #191919;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 20px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  resize-mode: contain;
`;
export const BackButtonImage = styled.Image`
  width: 24px;
  height: 24px;
  resize-mode: contain;
`;
export const TitleContainer = styled.View`
  justify-content: center;
`;

export const TitleText = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-weight: 900;
`;

export const ProfileContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${width * 0.03}px;
`;

export const NicknameText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  resize-mode: contain;
`;

export const HeaderContainer = styled.View`
  padding-horizontal: 20px;
  padding-vertical: 20px;
  background-color: #191919;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.View`
  align-items: center;
`;

export const Logo = styled.Image`
  width: 120px;
  height: 32px;
  margin-top: 10px;
`;