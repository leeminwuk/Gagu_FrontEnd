import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const MyPageContainer = styled.View`
  flex: 1;
  background-color: #191919;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #191919;
`;

export const ProfileContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin-vertical: 40px;
`;

export const ProfileImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

export const ProfileDetailContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const ProfileText = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #ffffff;
`;

export const UserEmailContainer = styled.View`
  margin-vertical: ${height * 0.03}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const EmailText = styled.Text`
  font-size: 16px;
  color: #a6a6a6;
  letter-spacing: -0.5px;
  line-height: 18px;
  text-align: center;
`;

export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${height * 0.05}px;
  gap: ${height * 0.01}px;
`;

export const LogoImage = styled.Image`
  width: 30px;
  height: 30px;
  margin-right: 8px;
`;

export const BarButtonContainer = styled.View`
  gap: ${height * 0.03}px;
`;

export const LogoStyle = styled.Image`
  width: 40px;
  height: 40px;
`;

export const LogoContainer = styled.View`
  margin-right: 22px;
`;