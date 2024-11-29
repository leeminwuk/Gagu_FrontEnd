import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  z-index: 100;
`;

export const LogoContainer = styled.View`
  align-items: center;
`;

export const MiniLogo = styled.Image`
  width: 120px;
  height: 32px;
  margin-top: 10px;
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

export const ProfileCircle = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  resize-mode: contain;
`;